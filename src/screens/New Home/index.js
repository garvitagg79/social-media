import React from "react";
import { render } from "react-dom";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../../components/components top/header";
import Bottomtab, {
  BottomtabIcons,
} from "../../components/components top/bottomtab";
import Reader from "../../components/components top/reader";
//import Read from "../../components/components top/read";
import Readi from "../../components/components top/readi";

const NewHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Readi />
      <Bottomtab icons={BottomtabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default NewHome;
