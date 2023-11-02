import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Item8 = ({ style }) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.panorama}>Panorama</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 27,
    height: 24,
  },
  panorama: {
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

export default Item8;
