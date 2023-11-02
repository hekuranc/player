import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypePrimarySizeSmall = ({
  buttonText,
  text = "Button",
  hasText = true,
  leftIcon = true,
  rightIcon = true,
  typePrimarySizeSmallPosition,
  typePrimarySizeSmallBackgroundColor,
  typePrimarySizeSmallOverflow,
  typePrimarySizeSmallMarginLeft,
}) => {
  const typePrimarySizeSmallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typePrimarySizeSmallPosition),
      ...getStyleValue("backgroundColor", typePrimarySizeSmallBackgroundColor),
      ...getStyleValue("overflow", typePrimarySizeSmallOverflow),
      ...getStyleValue("marginLeft", typePrimarySizeSmallMarginLeft),
    };
  }, [
    typePrimarySizeSmallPosition,
    typePrimarySizeSmallBackgroundColor,
    typePrimarySizeSmallOverflow,
    typePrimarySizeSmallMarginLeft,
  ]);

  return (
    <View style={[styles.typeprimarySizeSmall, typePrimarySizeSmallStyle]}>
      {leftIcon && (
        <Image
          style={styles.addIconLayout}
          contentFit="cover"
          source={buttonText}
        />
      )}
      {hasText && <Text style={styles.button}>{text}</Text>}
      {rightIcon && (
        <Image
          style={[styles.addIcon1, styles.addIconLayout]}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addIconLayout: {
    height: 18,
    width: 18,
  },
  button: {
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#292d32",
    textAlign: "center",
    marginLeft: 8,
  },
  addIcon1: {
    marginLeft: 8,
  },
  typeprimarySizeSmall: {
    borderRadius: 10,
    backgroundColor: "#6be48b",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});

export default TypePrimarySizeSmall;
