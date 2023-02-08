import { View, TouchableOpacity } from "react-native";
import React from "react";
import { colors, shadow, sizes } from "../../constants/theme";
import { Icon } from "./Icon";

export const FavoriteButton = ({ active, style, onPress }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: colors.white,
            padding: 4,
            borderRadius: sizes.radius,
          },
          shadow.light,
        ]}
      >
        <Icon
          icon={active ? "FavoriteFilled" : "Favorite"}
          size={25}
          color={active ? "red" : "white"}
        />
      </View>
    </TouchableOpacity>
  );
};
