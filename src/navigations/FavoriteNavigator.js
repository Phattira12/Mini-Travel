import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { FavoriteScreen } from "../screens/FavoriteScreen";

const Stack = createSharedElementStackNavigator();

export const FavoriteNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled:true,
        }}
      />
    </Stack.Navigator>
  );
};
