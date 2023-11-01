import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PanoramaForm = ({
  dimensionCode,
  imageDimensions,
  imageCode,
  propOpacity,
  propColor,
  propColor1,
  propColor2,
}) => {
  const menuStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity),
    };
  }, [propOpacity]);

  const lajmetStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const balkanwebStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const panoramaStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  return (
    <View style={[styles.menu, menuStyle]}>
      <View style={styles.item}>
        <Image
          style={styles.home2Icon}
          contentFit="cover"
          source={require("../assets/home21.png")}
        />
        <Text style={[styles.tv, styles.tvTypo]}>TV</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemChild}
          contentFit="cover"
          source={dimensionCode}
        />
        <Text style={[styles.lajmet, styles.tvTypo, lajmetStyle]}>Lajmet</Text>
      </View>
      <View style={styles.item}>
        <Image
          style={styles.itemItem}
          contentFit="cover"
          source={imageDimensions}
        />
        <Text style={[styles.tv, styles.tvTypo, balkanwebStyle]}>
          Balkanweb
        </Text>
      </View>
      <View style={styles.item}>
        <Image style={styles.itemInner} contentFit="cover" source={imageCode} />
        <Text style={[styles.tv, styles.tvTypo, panoramaStyle]}>Panorama</Text>
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
    color: Color.secondary400,
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
    color: Color.activeMenu2,
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
    marginTop: 24,
    alignItems: "center",
  },
});

export default PanoramaForm;
