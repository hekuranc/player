import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Menu2 = () => {
  return (
    <View style={styles.menu}>
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
          style={styles.itemItem}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
        <Text style={styles.tv}>Balkanweb</Text>
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
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  itemChild: {
    borderRadius: 7,
    width: 26,
    height: 26,
  },
  itemItem: {
    width: 20,
    height: 24,
  },
  menu: {
    backgroundColor: Color.colorGray,
    borderStyle: "solid",
    borderColor: Color.passiveMenu,
    borderTopWidth: 1,
    width: 438,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
});

export default Menu2;
