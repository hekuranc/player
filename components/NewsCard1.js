import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ContainerThumbnailForm from "./ContainerThumbnailForm";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NewsCard1 = () => {
  return (
    <View style={styles.news1}>
      <ContainerThumbnailForm
        imageDimensions={require("../assets/thumbnail2.png")}
      />
      <View style={styles.text}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={[styles.fotoDjalliBn, styles.fotoDjalliBnFlexBox]}>
              FOTO/ “Djalli bën mrekulli”, Milan bashkohet rreth Piolit, në
              pritje edhe…Ibrahimovic
            </Text>
          </View>
          <View style={styles.action}>
            <Image
              style={styles.notificationIcon}
              contentFit="cover"
              source={require("../assets/notification.png")}
            />
            <Text style={[styles.remindMe, styles.remindMeTypo]}>
              Remind me
            </Text>
          </View>
        </View>
        <Text style={[styles.demonSlayerKimetsu, styles.remindMeTypo]}>
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
  fotoDjalliBnFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  remindMeTypo: {
    color: Color.secondary200,
    fontFamily: FontFamily.bodyXsmallRegular,
    lineHeight: 16,
    fontSize: FontSize.bodyXsmallRegular_size,
    letterSpacing: 0,
  },
  fotoDjalliBn: {
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.secondaryWhite,
    letterSpacing: 0,
    textAlign: "left",
  },
  title: {
    flex: 1,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  remindMe: {
    textAlign: "center",
    marginTop: 6,
  },
  action: {
    justifyContent: "center",
    marginLeft: 24,
    display: "none",
    alignItems: "center",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  demonSlayerKimetsu: {
    display: "none",
    textAlign: "left",
    alignSelf: "stretch",
    marginTop: 12,
  },
  text: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  news1: {
    height: 264,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default NewsCard1;
