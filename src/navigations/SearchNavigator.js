import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { SearchScreen } from "../screens/SearchScreen";

const Stack = createSharedElementStackNavigator();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Searchs"
        component={SearchScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
