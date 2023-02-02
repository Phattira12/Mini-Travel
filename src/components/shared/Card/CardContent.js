import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { spacing } from "../../../constants/theme";

export const CardContent = ({ children, style }) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.l / 2,
  },
});
