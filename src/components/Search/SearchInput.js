import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors, shadow, sizes, spacing } from "../../constants/theme";
import { Icon } from "../shared/Icon";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <Icon icon="Search" />
        </View>
        <TextInput
          style={styles.field}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.filter}>
          <Icon icon="Filter" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
    paddingBottom: spacing.l / 1.5,
  },
  inner: {
    flexDirection: "row",
  },
  search: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  field: {
    backgroundColor: colors.light,
    paddingHorizontal: spacing.xl + spacing.s,
    paddingVertical: spacing.m,
    paddingRight: spacing.m,
    borderRadius: sizes.radius,
    height: 59,
    flex: 1,
    ...shadow.light,
  },
  filter: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
