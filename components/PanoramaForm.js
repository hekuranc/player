import React, { useMemo } from "react";
import { ImageSourcePropType } from "react-native";
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
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.bodyXsmallRegular_size,
  },
  itemItem: {
    width: 20,
    height: 24,
  },
  tv: {
    color: Color.passiveMenu,
  },
  item: {
    flex: 1,
    borderRadius: Border.br_101xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  itemInner: {
    width: 27,
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

export default PanoramaForm;
