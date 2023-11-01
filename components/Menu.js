import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Menu = ({ style }) => {
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
          source={require("../assets/group-11.png")}
        />
        <Text style={[styles.lajmet, styles.tvTypo]}>Balkanweb</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemInner}
          contentFit="cover"
          source={require("../assets/frame-171.png")}
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
    fontFamily: FontFamily.bodyXsmallSemibold,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.bodyXsmallSemibold_size,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    color: Color.activeMenu2,
  },
  item: {
    flex: 1,
    borderRadius: Border.br_101xl,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  itemChild: {
    borderRadius: 7,
    width: 26,
    height: 26,
  },
  lajmet: {
    color: Color.secondary400,
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
    backgroundColor: Color.colorGray,
    borderStyle: "solid",
    borderColor: Color.secondary400,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
});

export default Menu;
