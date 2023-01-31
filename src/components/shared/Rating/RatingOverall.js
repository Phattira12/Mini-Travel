import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, sizes } from "../../../constants/theme";

export const RatingOverall = ({ rating, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.caption}>Overall Rating</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: sizes.title,
    color: colors.primary,
  },
  caption: {
    fontSize: sizes.caption,
    color: colors.lightGray,
  },
});
