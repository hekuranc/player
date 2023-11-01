import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextWhiteBackgroundOff from "../components/TextWhiteBackgroundOff";
import NewsCard1 from "../components/NewsCard1";
import NewsCard11 from "../components/NewsCard11";
import PanoramaForm from "../components/PanoramaForm";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const News = () => {
  return (
    <LinearGradient
      style={styles.news}
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
      <ScrollView
        style={[styles.content, styles.contentSpaceBlock]}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentScrollViewContent}
      >
        <View style={styles.top}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <Text style={styles.myNews}>My News</Text>
        </View>
        <View style={[styles.verticalscroll, styles.contentSpaceBlock]}>
          <NewsCard1 />
          <NewsCard11 />
        </View>
      </ScrollView>
      <PanoramaForm
        dimensionCode={require("../assets/frame-151.png")}
        imageDimensions={require("../assets/group-1.png")}
        imageCode={require("../assets/frame-17.png")}
      />
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
  contentSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  frameIcon: {
    borderRadius: Border.br_smi_6,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  myNews: {
    fontSize: FontSize.headingH6_size,
    letterSpacing: 0,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.secondaryWhite,
    textAlign: "left",
  },
  top: {
    width: 358,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  verticalscroll: {
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  news: {
    backgroundColor: Color.otherGradient,
    width: "100%",
    height: 802,
    alignItems: "center",
    flex: 1,
  },
});

export default News;
