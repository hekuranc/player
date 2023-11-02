import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";

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
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "Inter-Regular",
    color: "#9d9ea1",
  },
  text: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    marginTop: 2,
  },
  date: {
    position: "absolute",
    bottom: 125,
    left: 16,
    backgroundColor: "#292d32",
    width: 41,
    alignItems: "center",
    padding: 8,
    opacity: 0,
    zIndex: 0,
    borderRadius: 10,
  },
  thumbnailIcon: {
    alignSelf: "stretch",
    flex: 1,
    minWidth: 175,
    minHeight: 100,
    borderRadius: 10,
  },
});

export default ContainerThumbnailForm;
