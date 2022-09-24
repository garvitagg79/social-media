import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { DataStore, Auth, Storage } from "aws-amplify";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { Post } from "../../../models";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const onSubmit = async () => {
    //const userData = await Auth.currentAuthenticatedUser();
    const newPost = {
      description: description,
      // "imag": "Lorem ipsum dolor sit amet",
      numberOfLikes: 0,
      numberOfShares: 0,
      postUserId: user.id,
      _version: 1,
    };

    if (image) {
      newPost.image = await uploadFile(image);
    }

    await DataStore.save(new Post(newPost));

    setDescription("");
    setImage("");

    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadFile = async (fileUri) => {
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const key = `${uuidv4()}.png`;
      await Storage.put(key, blob, {
        contentType: "image/png", // contentType is optional
      });
      return key;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="what is in your mind"
        multiline
      />

      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.buttoncontainer}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //width: "100%",
    padding: 10,
    //paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  buttoncontainer: {
    marginTop: "auto",
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "50%",
    aspectRatio: 4 / 3,
    alignSelf: "center",
  },
});

export default CreatePostScreen;
