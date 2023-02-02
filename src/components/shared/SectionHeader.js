import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { sizes, spacing } from "../../constants/theme";

export const SectionHeader = ({
  title,
  containerStyle,
  titleStyle,
  onPress,
  buttonTitle = "Button",
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {onPress && <Button title={buttonTitle} onPress={onPress} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: "bold",
  },
});
