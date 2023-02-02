import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, shadow, sizes } from "../../../constants/theme";

const Card = ({ children, style, onPress, shadowType = "light" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, style, shadow[shadowType]]}
    >
      <View style={styles.inner}>{children}</View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  inner: {
    width: '100%',
    height: '100%',
  },
});
