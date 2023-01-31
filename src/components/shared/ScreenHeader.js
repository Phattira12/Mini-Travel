import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizes, spacing } from "../../constants/theme";

export const ScreenHeader = ({ mainTitle, secoudTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secoudTitle}>{secoudTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: sizes.title,
    fontWeight: "bold",
  },
  secoudTitle: {
   fontSize: sizes.title,
  },
});
