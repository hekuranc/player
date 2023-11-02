import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const Item9 = ({ style }) => {
  return (
    <View style={[styles.item, style]}>
      <Image
        style={styles.itemChild}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Text style={styles.balkanweb}>Balkanweb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemChild: {
    width: 20,
    height: 24,
  },
  balkanweb: {
    fontSize: 10,
    letterSpacing: 0,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#fe0010",
    textAlign: "left",
    marginTop: 8,
  },
  item: {
    flex: 1,
    borderRadius: 120,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 16,
  },
});

export default Item9;
