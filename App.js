import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Navigation from "./src/navigation";
import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import HomeScreen from "./src/screens/HomeScreen";
import Home from "./src/screens/Home";
import NewHome from "./src/screens/New Home";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import FeedPost from "./src/screens/social/components/FeedPost";
import posts from "./assets/data/posts.json";
import FeedScreen from "./src/screens/social/screens/FeedScreen";
import CreatePostScreen from "./src/screens/social/screens/CreatePostScreen";
import Navigator from "./src/screens/social/navigation";

Amplify.configure(config);

const App = () => {
  Auth.signOut();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Navigator />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c9c9",
  },
});

export default App;
