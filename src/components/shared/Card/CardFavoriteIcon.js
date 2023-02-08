import { StyleSheet } from "react-native";
import React from "react";
import { FavoriteButton } from "../FavoriteButton";


export const CardFavoriteIcon = ({active, onPress}) => {
  return (
    <FavoriteButton active={active} onPress={onPress} style={styles.icon} />
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
  },
});
