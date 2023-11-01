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
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

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
        style={[styles.content, styles.contentFlexBox]}
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
          <Text style={[styles.myNews, styles.textTypo]}>My News</Text>
        </View>
        <View style={[styles.verticalscroll, styles.contentFlexBox]}>
          <View style={[styles.cardTop10, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.thumbnailIcon}
              resizeMode="cover"
              source={require("../assets/thumbnail.png")}
            >
              <View style={[styles.date, styles.datePosition]}>
                <Text style={styles.no}>No.</Text>
                <Text style={[styles.text, styles.textTypo]}>1</Text>
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
                <Text style={styles.no}>No.</Text>
                <Text style={[styles.text, styles.textTypo]}>1</Text>
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
      <View style={[styles.menu, styles.topFlexBox]}>
        <View style={[styles.item, styles.cardFlexBox]}>
          <Image
            style={styles.home2Icon}
            contentFit="cover"
            source={require("../assets/home21.png")}
          />
          <Text style={[styles.tv, styles.tvTypo]}>TV</Text>
        </View>
        <View style={[styles.item, styles.cardFlexBox]}>
          <Image
            style={styles.itemChild}
            contentFit="cover"
            source={require("../assets/frame-151.png")}
          />
          <Text style={[styles.lajmet, styles.tvTypo]}>Lajmet</Text>
        </View>
        <View style={[styles.item, styles.cardFlexBox]}>
          <Image
            style={styles.itemItem}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.tv, styles.tvTypo]}>Balkanweb</Text>
        </View>
        <View style={[styles.item, styles.cardFlexBox]}>
          <Image
            style={styles.itemInner}
            contentFit="cover"
            source={require("../assets/frame-17.png")}
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
  contentFlexBox: {
    alignSelf: "stretch",
    marginTop: 24,
  },
  topFlexBox: {
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    color: Color.secondaryWhite,
    fontFamily: FontFamily.bodyLargeBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.headingH6_size,
  },
  cardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  tvTypo: {
    marginTop: 8,
    fontFamily: FontFamily.bodyXsmallSemibold,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.bodyXsmallSemibold_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameIcon: {
    borderRadius: Border.br_smi_6,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  myNews: {
    lineHeight: 27,
  },
  top: {
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_xs,
  },
  no: {
    fontFamily: FontFamily.bodyXsmallRegular,
    color: Color.secondary200,
    lineHeight: 16,
    fontSize: FontSize.bodyXsmallSemibold_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  text: {
    lineHeight: 25,
    marginTop: 2,
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
  cardTop10: {
    height: 322,
    width: 398,
    justifyContent: "center",
  },
  cardTop11: {
    height: 322,
    width: 398,
    justifyContent: "center",
    marginTop: 24,
  },
  verticalscroll: {
    marginTop: 24,
    alignItems: "center",
  },
  content: {
    marginTop: 24,
    flex: 1,
  },
  home2Icon: {
    width: 24,
    height: 24,
  },
  tv: {
    color: Color.secondary400,
  },
  item: {
    borderRadius: Border.br_101xl,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    flex: 1,
  },
  itemChild: {
    borderRadius: 7,
    width: 26,
    height: 26,
  },
  lajmet: {
    color: Color.activeMenu2,
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
    backgroundColor: Color.colorGray,
    borderStyle: "solid",
    borderColor: Color.secondary400,
    borderTopWidth: 1,
    paddingHorizontal: Padding.p_5xl,
    opacity: 0.8,
    marginTop: 24,
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
