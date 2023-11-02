import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextWhiteBackgroundOff from "../components/TextWhiteBackgroundOff";

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
      <View style={[styles.balkanwebWebviewWrapper, styles.menuSpaceBlock]}>
        <Text style={[styles.balkanwebWebview, styles.tvTypo]}>
          balkanweb webview
        </Text>
      </View>
      <View style={[styles.menu, styles.menuSpaceBlock]}>
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
            source={require("../assets/frame-152.png")}
          />
          <Text style={[styles.tv, styles.tvTypo]}>Lajmet</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemItem}
            contentFit="cover"
            source={require("../assets/group-11.png")}
          />
          <Text style={[styles.tv, styles.tvTypo]}>Balkanweb</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemInner}
            contentFit="cover"
            source={require("../assets/frame-1711.png")}
          />
          <Text style={[styles.tv, styles.tvTypo]}>Panorama</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menuSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  tvTypo: {
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: 10,
  },
  balkanwebWebview: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "#fff",
  },
  balkanwebWebviewWrapper: {
    flex: 1,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    color: "#54575b",
    marginTop: 8,
  },
  item: {
    borderRadius: 120,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
    flex: 1,
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
  itemInner: {
    width: 27,
    height: 24,
  },
  menu: {
    backgroundColor: "rgba(3, 3, 3, 0.8)",
    borderStyle: "solid",
    borderColor: "#54575b",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
  balkanweb: {
    width: "100%",
    height: 738,
    backgroundColor: "transparent",
    alignItems: "center",
    flex: 1,
  },
});

export default Balkanweb;
