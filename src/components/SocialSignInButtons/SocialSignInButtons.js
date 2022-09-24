import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("OnSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("OnSignInGoogle");
  };
  const onSignInApple = () => {
    console.warn("OnSignInApple");
  };
  return (
    <View>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </View>
  );
};

export default SocialSignInButtons;
