import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <LinearGradient
      style={[styles.splash, styles.splashFlexBox]}
      locations={[0, 1]}
      colors={["#030303", "#1a2d39"]}
    >
      <StatusBar barStyle="default" translucent={true} />
      <View style={[styles.frameWrapper, styles.splashFlexBox]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  splashFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    borderRadius: 30,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  frameWrapper: {
    width: 482,
    height: 858,
    padding: 10,
  },
  splash: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.otherGradient,
  },
});

export default Splash;
