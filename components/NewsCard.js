import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypePrimarySizeSmall from "./TypePrimarySizeSmall";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const NewsCard = ({ channelName, leftIcon, hasText, rightIcon }) => {
  return (
    <View style={styles.textSpaceBlock}>
      <View style={styles.top}>
        <View style={styles.title}>
          <Text style={styles.news24}>{channelName}</Text>
          <View style={styles.row}>
            <Text style={[styles.live, styles.liveTypo]}>LIVE</Text>
            <Text style={[styles.text1, styles.text1Typo]}>•</Text>
            <Text style={[styles.informativ, styles.text1Typo]}>
              Informativ
            </Text>
          </View>
        </View>
        <TypePrimarySizeSmall
          buttonText={require("../assets/play.png")}
          text="Play"
          hasText={false}
          leftIcon
          rightIcon={false}
          typePrimarySizeSmallPosition="unset"
          typePrimarySizeSmallBackgroundColor="#fe0010"
          typePrimarySizeSmallOverflow="unset"
          typePrimarySizeSmallMarginLeft={24}
        />
      </View>
      <Text style={[styles.news24QPrej, styles.liveTypo]}>
        News24, që prej vitit 2002, është televizioni i parë informativ në
        Shqipëri, i dedikuar tërësisht lajmit. News24 sjell lajmin e fundit në
        kohë reale, me raportime 24 orë nga gazetarët ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  liveTypo: {
    fontFamily: FontFamily.bodyXsmallRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  text1Typo: {
    marginLeft: 2,
    fontFamily: FontFamily.bodyXsmallRegular,
    lineHeight: 20,
    fontSize: FontSize.bodySmallRegular_size,
    textAlign: "left",
    letterSpacing: 0,
  },
  news24: {
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.secondaryWhite,
    textAlign: "left",
    letterSpacing: 0,
  },
  live: {
    color: Color.live,
    lineHeight: 20,
    fontSize: FontSize.bodySmallRegular_size,
    fontFamily: FontFamily.bodyXsmallRegular,
  },
  text1: {
    color: Color.live,
  },
  informativ: {
    color: Color.secondary100,
  },
  row: {
    marginTop: 4,
    flexDirection: "row",
  },
  title: {
    flex: 1,
  },
  top: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  news24QPrej: {
    fontSize: FontSize.bodyXsmallRegular_size,
    lineHeight: 16,
    color: Color.secondary200,
    marginTop: 12,
    alignSelf: "stretch",
  },
  textSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
});

export default NewsCard;
