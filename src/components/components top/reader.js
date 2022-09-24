import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import ImagePicker from "react-native-image-picker";
import { RNS3 } from "react-native-aws3";

type Props = {};
export default class Reader extends Component<Props> {
  takePic() {
    ImagePicker.showImagePicker({}, (response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to aws</Text>
        <TouchableOpacity onPress={this.takePic.bind(this)}>
          <Text>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 28,
  },
});
