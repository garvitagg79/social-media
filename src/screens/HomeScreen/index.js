import { Auth } from "aws-amplify";
import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Index = () => {
  const { height } = useWindowDimensions();
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text
          onPress={signOut}
          style={{
            width: "100%",
            textAlign: "center",
            color: "red",
            marginTop: 650,
            marginVertical: 20,
            fontSize: 20,
          }}
        >
          Sign Out
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            alert("hi");
          }}
        >
          <Text style={{ fontSize: 20 }}>Footer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F5F5F5",
    boxSizing: "border-box",
  },
  container: {
    padding: 0,
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    outline: "none",
    fontSize: 100,
    verticalAlign: "baseline",
    backgroundColor: "transparent",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    height: 34,
  },
});
