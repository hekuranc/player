import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ContainerThumbnailForm from "./ContainerThumbnailForm";

const NewsCard11 = () => {
  return (
    <View style={styles.news1}>
      <ContainerThumbnailForm
        imageDimensions={require("../assets/thumbnail3.png")}
        propAlignItems="center"
      />
      <View style={styles.text}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text
              style={[styles.poShkelenLigjet, styles.poShkelenLigjetFlexBox]}
            >
              “Po shkelen ligjet ndërkombëtare”/ Bolivia ndërpret marrëdhëniet
              diplomatike me Izraelin
            </Text>
          </View>
        </View>
        <Text
          style={[styles.demonSlayerKimetsu, styles.poShkelenLigjetFlexBox]}
        >
          Demon Slayer: Kimetsu no Yaiba is a Japanese anime series based on the
          manga series of the same title, written and illustrated by Koyoharu
          Gotouge. At the end of the second-season finale, a third season
          covering the "Swordsmith Village" arc from the manga was announced.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  poShkelenLigjetFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  poShkelenLigjet: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#fff",
  },
  title: {
    flex: 1,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  demonSlayerKimetsu: {
    fontSize: 10,
    lineHeight: 16,
    fontFamily: "Inter-Regular",
    color: "#9d9ea1",
    display: "none",
    marginTop: 12,
  },
  text: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  news1: {
    height: 290,
    marginTop: 24,
    alignSelf: "stretch",
  },
});

export default NewsCard11;
