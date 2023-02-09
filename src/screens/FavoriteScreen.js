import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/theme";
import { MainHeader } from "../components/shared/MainHeader";
import React from "react";
import FavoritesList from "../components/Favorite/FavoritesList";

export const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Favorite" />
      <FavoritesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
