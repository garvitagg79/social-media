import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Logo from "../../../assets/logo.png";
import CustomInput from "../../components/Custominput/Custominput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";

const SignInScreen = (data) => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await Auth.signIn(data.username, data.password);
      navigation.navigate("Feed");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{ required: "Username is required" }}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be minimum 8 characters long",
              },
            }}
            secureTextEntry
          />

          {/*<TextInput placeholder={"password"} />*/}

          <CustomButton
            text={loading ? "Loading..." : "Sign In"}
            onPress={handleSubmit(onSignInPressed)}
          />
          <CustomButton
            text="Forgot password"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          {/*<SocialSignInButtons />*/}

          <CustomButton
            text="Don't have an account? Create One"
            onPress={onSignUpPressed}
            type="TERTIARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  container: {
    paddingTop: 30,
    height: "100%",
  },
  logo: {
    width: 100,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
