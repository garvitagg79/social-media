import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/Custominput/Custominput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate("NewPassword");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
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
            placeholder="Username"
            rules={{
              required: "Username is required",
            }}
          />

          <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

          <CustomButton
            text="Back to Sign In"
            onPress={onSignInPress}
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

export default ForgotPasswordScreen;
