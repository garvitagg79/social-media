import { View, Text } from "react-native";
import React from "react";
import RNFetchBlob from "rn-fetch-blob";
import DocumentPickerHandle from "react-native-document-picker";

documentSelect = async () => {
  setTimeout(async () => {
    try {
      const res = await DocumentPickerHandle.pick({
        type: [DocumentPickerHandle.types.pdf],
      });
      const fileName = res.uri.replace("file://", "")
      let data = ''
      RNFetchBlob.fs.readStream(
        fileName, 
        'base64',
      )
    }
  })
};
const Read = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Read</Text>
    </View>
  );
};

export default Read;
