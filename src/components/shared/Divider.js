import { View, Text } from "react-native";
import React, { forwardRef } from "react";
import { colors, spacing } from "../../constants/theme";

export const Divider = forwardRef(({ style, enabledSpacing = true },ref) => {
  return (
    <View
    ref={ref}
      style={[
        {
          height: 1,
          backgroundColor: colors.lightGray,
          marginHorizontal: enabledSpacing ? spacing.l : 0,
        },
        style,
      ]}
    />
  );
});
