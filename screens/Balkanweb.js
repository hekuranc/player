import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextWhiteBackgroundOff from "../components/TextWhiteBackgroundOff";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Balkanweb = () => {
  return (
    <LinearGradient
      style={styles.balkanweb}
      locations={[0, 1]}
      colors={["#030303", "#1a2d39"]}
    >
      <TextWhiteBackgroundOff
        imageDimensions={require("../assets/status-bar1.png")}
        textWhiteBackgroundOffWidth="100%"
        textWhiteBackgroundOffAlignSelf="stretch"
        textWhiteBackgroundOffMaxWidth="100%"
        textWhiteBackgroundOffOverflow="hidden"
      />
      <View style={styles.balkanwebWebviewWrapper}>
        <Text style={styles.balkanwebWebview}>balkanweb webview</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  balkanwebWebview: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.bodyXsmallRegular_size,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.secondaryWhite,
    textAlign: "left",
  },
  balkanwebWebviewWrapper: {
    width: 102,
    marginTop: 24,
    flex: 1,
  },
  balkanweb: {
    width: "100%",
    height: 738,
    alignItems: "center",
    backgroundColor: Color.otherGradient,
    flex: 1,
  },
});

export default Balkanweb;
