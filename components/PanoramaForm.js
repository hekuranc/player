import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const PanoramaForm = ({ style }) => {
  return (
    <View style={[styles.menu, style]}>
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
  );
};

const styles = StyleSheet.create({
  tvTypo: {
    marginTop: 8,
    textAlign: "left",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: 10,
  },
  itemItem: {
    width: 20,
    height: 24,
  },
  tv: {
    color: "#54575b",
  },
  item: {
    flex: 1,
    borderRadius: 120,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: "center",
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
    width: 438,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 0,
    opacity: 0.8,
    alignItems: "center",
  },
});

export default PanoramaForm;
