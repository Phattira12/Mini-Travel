import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { sizes } from "../../../constants/theme";

export const CardMedia = ({ source, borderBottomRadius = false }) => {
  return (
    <View
      style={[styles.media].concat(
        borderBottomRadius ? styles.borderBottomRadius : null
      )}
    >
      <Image style={styles.image} source={source} />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    flex: 1,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  borderBottomRadius: {
    borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
  },
});
