import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Item7 = ({ style }) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.home2Icon}
        contentFit="cover"
        source={require("../assets/home2.png")}
      />
      <Text style={styles.tv}>TV</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    fontSize: FontSize.bodyXsmallRegular_size,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.activeMenu2,
    textAlign: "left",
    marginTop: 8,
  },
  item: {
    flex: 1,
    borderRadius: Border.br_101xl,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
  },
});

export default Item7;
