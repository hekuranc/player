import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import TextWhiteBackgroundOff from "../components/TextWhiteBackgroundOff";
import PanoramaForm from "../components/PanoramaForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Panorama = () => {
  return (
    <LinearGradient
      style={styles.panorama}
      locations={[0, 1]}
      colors={["#030303", "#1a2d39"]}
    >
      <TextWhiteBackgroundOff
        imageDimensions={require("../assets/status-bar.png")}
        textWhiteBackgroundOffWidth="100%"
        textWhiteBackgroundOffAlignSelf="stretch"
        textWhiteBackgroundOffMaxWidth="100%"
        textWhiteBackgroundOffOverflow="hidden"
      />
      <SafeAreaView style={styles.panoramaWebviewWrapper}>
        <Text style={styles.panoramaWebview}>Panorama webview</Text>
      </SafeAreaView>
      <PanoramaForm
        dimensionCode={require("../assets/frame-15.png")}
        imageDimensions={require("../assets/group-1.png")}
        imageCode={require("../assets/vector1.png")}
        propColor="#54575b"
        propColor1="#54575b"
        propColor2="#fe0010"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  panoramaWebview: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.bodyXsmallSemibold_size,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.bodyXsmallSemibold,
    color: Color.secondaryWhite,
    textAlign: "left",
  },
  panoramaWebviewWrapper: {
    width: 97,
    marginTop: 24,
    flex: 1,
  },
  panorama: {
    width: "100%",
    height: 738,
    alignItems: "center",
    backgroundColor: Color.otherGradient,
    flex: 1,
  },
});

export default Panorama;
