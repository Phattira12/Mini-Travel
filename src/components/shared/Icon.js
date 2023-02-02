import { Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../constants/icons";

export const Icon = ({ onPress, icon, style, size = 40 }) => {
  const image = (
    <Image
      source={icons[icon]}
      style={[{ width: size, height: size, resizeMode: "cover" }, style]}
    />
  );

  if(onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>
  }
  return image;
};
