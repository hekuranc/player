import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Menu = ({ style }) => {
  return <View style={[styles.menu, style]} />;
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
  menu: {
    backgroundColor: "rgba(3, 3, 3, 0.8)",
    borderStyle: "solid",
    borderColor: "#54575b",
    borderTopWidth: 1,
    width: 362,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
});

export default Menu;
