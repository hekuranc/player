import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TextWhiteBackgroundOff = ({
  imageDimensions,
  textWhiteBackgroundOffWidth,
  textWhiteBackgroundOffAlignSelf,
  textWhiteBackgroundOffMaxWidth,
  textWhiteBackgroundOffOverflow,
}) => {
  const textWhiteBackgroundOffStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textWhiteBackgroundOffWidth),
      ...getStyleValue("alignSelf", textWhiteBackgroundOffAlignSelf),
      ...getStyleValue("maxWidth", textWhiteBackgroundOffMaxWidth),
      ...getStyleValue("overflow", textWhiteBackgroundOffOverflow),
    };
  }, [
    textWhiteBackgroundOffWidth,
    textWhiteBackgroundOffAlignSelf,
    textWhiteBackgroundOffMaxWidth,
    textWhiteBackgroundOffOverflow,
  ]);

  return (
    <Image
      style={[styles.textWhiteBackgroundOff, textWhiteBackgroundOffStyle]}
      contentFit="cover"
      source={imageDimensions}
    />
  );
};

const styles = StyleSheet.create({
  textWhiteBackgroundOff: {
    width: 375,
    height: 44,
  },
});

export default TextWhiteBackgroundOff;
