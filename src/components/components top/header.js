//import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";
import react from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/FFFFFF/leaderboard.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.head}>Metalien</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/FFFFFF/settings.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>4</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/FFFFFF/homework.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 14,
  },
  head: {
    color: "white",
    textAlign: "center",
    fontSize: 29,
    marginTop: 6,
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 9,
    marginLeft: -10,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,

    color: "white",
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 23,
    bottom: 13,
    width: 17,
    height: 17,
    borderRadius: 44 / 2,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
    bottom: 2.5,
    right: 1,
  },
});

export default Header;
