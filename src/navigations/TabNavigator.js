import React from "react";
import { StyleSheet, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchScreen } from "../screens/SearchScreen";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { Icon } from "../components/shared/Icon";
import { colors, sizes } from "../constants/theme";
import { HomeNavigator } from "./HomeNavigator";

const tabs = [
  {
    name: "Home",
    screen: HomeNavigator,
  },
  {
    name: "Search",
    screen: SearchScreen,
  },
  {
    name: "Favorite",
    screen: FavoriteScreen,
  },
];

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      >
        {tabs.map(({ name, screen }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      icon={name}
                      size={35}
                      style={{
                        tintColor: focused ? colors.primary : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          { transform: [{ translateX: offsetAnimation }] },
        ]}
      />
    </>
  );
};
const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 10,
    height: 2,
    left: sizes.width / 3 / 2 - 5,
    bottom: 10,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});
