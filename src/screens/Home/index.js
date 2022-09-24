import { Auth } from "aws-amplify";
import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "pink", marginTop: 40 }}>
      <View style={{ margin: 10, padding: 5, backgroundColor: "white" }}>
        <TextInput style={{ height: 40 }} placeholder="Search..." />
      </View>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <HeaderComponent />,
        }}
      >
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F5F5F5",
    boxSizing: "border-box",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
