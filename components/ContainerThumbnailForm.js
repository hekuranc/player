import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerThumbnailForm = ({ imageDimensions, propAlignItems }) => {
  const thumbnailIconStyle = useMemo(() => {
    return {
      ...getStyleValue("alignItems", propAlignItems),
    };
  }, [propAlignItems]);

  return (
    <ImageBackground
      style={[styles.thumbnailIcon, thumbnailIconStyle]}
      resizeMode="cover"
      source={imageDimensions}
    >
      <View style={styles.date}>
        <Text style={[styles.nov, styles.novFlexBox]}>NOV</Text>
        <Text style={[styles.text, styles.novFlexBox]}>1</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  novFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  nov: {
    fontSize: FontSize.bodyXsmallSemibold_size,
    lineHeight: 16,
    fontFamily: FontFamily.bodyXsmallRegular,
    color: Color.secondary200,
  },
  text: {
    fontSize: FontSize.headingH6_size,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.secondaryWhite,
    marginTop: 2,
  },
  date: {
    position: "absolute",
    bottom: 125,
    left: 16,
    backgroundColor: Color.secondary500,
    width: 41,
    alignItems: "center",
    padding: Padding.p_5xs,
    opacity: 0,
    zIndex: 0,
    borderRadius: Border.br_3xs,
  },
  thumbnailIcon: {
    alignSelf: "stretch",
    flex: 1,
    minWidth: 175,
    minHeight: 100,
    borderRadius: Border.br_3xs,
  },
});

export default ContainerThumbnailForm;
