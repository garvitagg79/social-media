import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/Custominput/Custominput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    //navigation.navigate("Home");
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset Your Password</Text>
          <CustomInput
            name="username"
            control={control}
            placeholder="username"
            rules={{ required: "username is required" }}
          />
          <CustomInput
            name="code"
            control={control}
            placeholder="Code"
            rules={{ required: "Code is required" }}
          />
          <CustomInput
            name="password"
            control={control}
            placeholder="Enter your new password"
            secureTextEntry
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />

          <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

          <CustomButton
            text="Back to Sign In"
            onPress={handleSubmit(onSignInPress)}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FD8075",
  },
});

export default NewPasswordScreen;
