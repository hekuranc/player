import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TextWhiteBackgroundOff from "../components/TextWhiteBackgroundOff";
import NewsCard from "../components/NewsCard";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TVPlayer = () => {
  return (
    <LinearGradient
      style={styles.tvplayer}
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
        style={styles.content}
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
          <Text style={[styles.myNews, styles.noFlexBox]}>My News</Text>
        </View>
        <View style={styles.verticalscroll}>
          <View style={styles.cardFlexBox}>
            <ImageBackground
              style={styles.thumbnailIcon}
              resizeMode="cover"
              source={require("../assets/thumbnail.png")}
            >
              <View style={[styles.date, styles.datePosition]}>
                <Text style={[styles.no, styles.noFlexBox]}>No.</Text>
                <Text style={[styles.text, styles.noFlexBox]}>1</Text>
              </View>
            </ImageBackground>
            <NewsCard
              channelName="News24"
              leftIcon
              hasText={false}
              rightIcon={false}
            />
          </View>
          <View style={[styles.cardTop11, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.thumbnailIcon}
              resizeMode="cover"
              source={require("../assets/thumbnail1.png")}
            >
              <View style={styles.datePosition}>
                <Text style={[styles.no, styles.noFlexBox]}>No.</Text>
                <Text style={[styles.text, styles.noFlexBox]}>1</Text>
              </View>
            </ImageBackground>
            <NewsCard
              channelName="Panorama TV"
              leftIcon
              hasText={false}
              rightIcon={false}
            />
          </View>
        </View>
      </ScrollView>
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
  noFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  datePosition: {
    zIndex: 0,
    display: "none",
    padding: Padding.p_5xs,
    width: 41,
    backgroundColor: Color.secondary500,
    left: 16,
    bottom: 125,
    position: "absolute",
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  cardFlexBox: {
    justifyContent: "center",
    height: 322,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameIcon: {
    borderRadius: Border.br_smi_6,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  myNews: {
    lineHeight: 27,
    color: Color.secondaryWhite,
    fontFamily: FontFamily.bodyLargeBold,
    fontWeight: "700",
    fontSize: FontSize.headingH6_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  top: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  no: {
    fontSize: FontSize.bodyXsmallRegular_size,
    lineHeight: 16,
    fontFamily: FontFamily.bodyXsmallRegular,
    color: Color.secondary200,
    textAlign: "left",
    letterSpacing: 0,
  },
  text: {
    lineHeight: 25,
    marginTop: 2,
    color: Color.secondaryWhite,
    fontFamily: FontFamily.bodyLargeBold,
    fontWeight: "700",
    fontSize: FontSize.headingH6_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  date: {
    opacity: 0,
  },
  thumbnailIcon: {
    minWidth: 175,
    minHeight: 100,
    borderRadius: Border.br_3xs,
    alignSelf: "stretch",
    flex: 1,
  },
  cardTop11: {
    marginTop: 24,
  },
  verticalscroll: {
    marginTop: 24,
    alignSelf: "stretch",
    alignItems: "center",
  },
  content: {
    marginTop: 24,
    alignSelf: "stretch",
    flex: 1,
  },
  tvplayer: {
    backgroundColor: Color.otherGradient,
    width: "100%",
    height: 802,
    alignItems: "center",
    flex: 1,
  },
});

export default TVPlayer;
