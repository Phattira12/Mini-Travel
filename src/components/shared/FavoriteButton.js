import { View } from "react-native";
import React from "react";
import { colors, shadow } from "../../constants/theme";
import { Icon } from "./Icon";

export const FavoriteButton = ({ active, style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}
    >
      <Icon icon={active ? 'FavoriteFilled':"Favorite"} size={24} />
    </View>
  );
};

