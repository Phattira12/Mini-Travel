import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { ProfileScreen } from "../screens/ProfileScreen";

const Stack = createSharedElementStackNavigator();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profiles"
        component={ProfileScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled:true,
        }}
      />
    </Stack.Navigator>
  );
};