import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TypePrimarySizeSmall from "./TypePrimarySizeSmall";

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
    fontFamily: "Inter-Regular",
    textAlign: "left",
    letterSpacing: 0,
  },
  text1Typo: {
    marginLeft: 2,
    fontFamily: "Inter-Regular",
    lineHeight: 20,
    fontSize: 12,
    textAlign: "left",
    letterSpacing: 0,
  },
  news24: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
    textAlign: "left",
    letterSpacing: 0,
  },
  live: {
    color: "#d05c5c",
    lineHeight: 20,
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  text1: {
    color: "#d05c5c",
  },
  informativ: {
    color: "#bdbebf",
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
    fontSize: 10,
    lineHeight: 16,
    color: "#9d9ea1",
    marginTop: 12,
    alignSelf: "stretch",
  },
  textSpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
});

export default NewsCard;
