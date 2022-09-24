import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const BottomtabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material-rounded/24/FFFFFF/home.png",
    inactive: "https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png",
  },
  {
    name: "Home",
    active: "https://img.icons8.com/material-rounded/24/FFFFFF/home.png",
    inactive: "https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png",
  },
  {
    name: "Home",
    active: "https://img.icons8.com/material-rounded/24/FFFFFF/home.png",
    inactive: "https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png",
  },
  {
    name: "Home",
    active: "https://img.icons8.com/material-rounded/24/FFFFFF/home.png",
    inactive: "https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png",
  },
  {
    name: "Home",
    active: "https://img.icons8.com/material-rounded/24/FFFFFF/home.png",
    inactive: "https://img.icons8.com/material-outlined/24/FFFFFF/home--v2.png",
  },
];

const Bottomtab = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("NewHome");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingTop: 13,
    marginLeft: 14,
    marginRight: 11,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Bottomtab;
