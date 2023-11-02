import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Menu1 = ({ style }) => {
  return (
    <View style={[styles.menu, style]}>
      <View style={styles.item}>
        <Image
          style={styles.home2Icon}
          contentFit="cover"
          source={require("../assets/home21.png")}
        />
        <Text style={styles.tv}>TV</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemChild}
          contentFit="cover"
          source={require("../assets/frame-152.png")}
        />
        <Text style={styles.tv}>Lajmet</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemInner}
          contentFit="cover"
          source={require("../assets/frame-1711.png")}
        />
        <Text style={styles.tv}>Panorama</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#54575b",
    textAlign: "left",
    marginTop: 8,
  },
  item: {
    flex: 1,
    borderRadius: 120,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
  },
  itemChild: {
    borderRadius: 7,
    width: 26,
    height: 26,
  },
  itemInner: {
    width: 27,
    height: 24,
  },
  menu: {
    backgroundColor: "rgba(3, 3, 3, 0.8)",
    borderStyle: "solid",
    borderColor: "#54575b",
    borderTopWidth: 1,
    width: 438,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
});

export default Menu1;
