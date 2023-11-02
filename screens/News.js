import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextWhiteBackgroundOff from "../components/TextWhiteBackgroundOff";
import NewsCard1 from "../components/NewsCard1";
import NewsCard11 from "../components/NewsCard11";

const News = () => {
  return (
    <LinearGradient
      style={styles.news}
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
      <ScrollView
        style={[styles.content, styles.menuSpaceBlock]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentScrollViewContent}
      >
        <View style={[styles.top, styles.topFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <Text style={styles.myNews}>My News</Text>
        </View>
        <View style={[styles.verticalscroll, styles.menuSpaceBlock]}>
          <NewsCard1 />
          <NewsCard11 />
        </View>
      </ScrollView>
      <View style={[styles.menu, styles.topFlexBox]}>
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
            source={require("../assets/frame-151.png")}
          />
          <Text style={[styles.lajmet, styles.tvTypo]}>Lajmet</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.itemItem}
            contentFit="cover"
            source={require("../assets/group-111.png")}
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
  contentScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  topFlexBox: {
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  tvTypo: {
    marginTop: 8,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 16,
    fontSize: 10,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameIcon: {
    borderRadius: 13,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  myNews: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "left",
    letterSpacing: 0,
  },
  top: {
    width: 358,
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
  verticalscroll: {
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    color: "#54575b",
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
  lajmet: {
    color: "#fe0010",
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
    paddingHorizontal: 24,
    opacity: 0.8,
    marginTop: 24,
    alignSelf: "stretch",
  },
  news: {
    backgroundColor: "transparent",
    width: "100%",
    height: 802,
    alignItems: "center",
    flex: 1,
  },
});

export default News;
