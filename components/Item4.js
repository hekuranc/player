import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Item4 = ({ style }) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.itemChild}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Text style={styles.lajmet}>Lajmet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemChild: {
    borderRadius: 7,
    width: 26,
    height: 26,
  },
  lajmet: {
    fontSize: FontSize.bodyXsmallRegular_size,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.passiveMenu,
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

export default Item4;
