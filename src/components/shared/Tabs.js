import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { spacing, colors, sizes } from "../../constants/theme";
import Animated, { BounceIn } from "react-native-reanimated";

export const Tabs = ({ items }) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {items.map((tab, i) => {
          const active = index === i;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={styles.tab}
            >
              {active && (
                <Animated.View entering={BounceIn} style={styles.dot} />
              )}
              <Text style={active ? styles.activeTabText : styles.tabText}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {items[index].content()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: spacing.l,
    paddingBottom: spacing.m,
  },
  tab: {
    marginLeft: spacing.m,
  },
  tabText: {
    color: colors.gray,
  },
  activeTabText: {
    color: colors.primary,
  },
  dot: {
    position: "absolute",
    top: 7,
    left: -12,
    width: 7,
    height: 7,
    backgroundColor: colors.primary,
    borderRadius: sizes.radius,
  },
});
