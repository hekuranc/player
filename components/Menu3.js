import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Menu3 = ({ style }) => {
  return (
    <View style={[styles.menu, style]}>
      <View style={styles.item}>
        <Image
          style={styles.home2Icon}
          contentFit="cover"
          source={require("../assets/home22.png")}
        />
        <Text style={[styles.tv, styles.tvTypo]}>TV</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemChild}
          contentFit="cover"
          source={require("../assets/frame-152.png")}
        />
        <Text style={[styles.lajmet, styles.tvTypo]}>Lajmet</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemItem}
          contentFit="cover"
          source={require("../assets/group-111.png")}
        />
        <Text style={[styles.lajmet, styles.tvTypo]}>Balkanweb</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemInner}
          contentFit="cover"
          source={require("../assets/frame-1711.png")}
        />
        <Text style={[styles.lajmet, styles.tvTypo]}>Panorama</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tvTypo: {
    marginTop: 8,
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: 10,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    color: "#fe0010",
  },
  item: {
    flex: 1,
    borderRadius: 120,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 16,
    alignItems: "center",
  },
  itemChild: {
    borderRadius: 7,
    width: 26,
    height: 26,
  },
  lajmet: {
    color: "#54575b",
  },
  itemItem: {
    width: 20,
    height: 24,
  },
  itemInner: {
    width: 27,
    height: 24,
  },
  menu: {
    alignSelf: "stretch",
    backgroundColor: "rgba(3, 3, 3, 0.8)",
    borderStyle: "solid",
    borderColor: "#54575b",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
});

export default Menu3;
