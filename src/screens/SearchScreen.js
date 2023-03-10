import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../constants/theme";
import { MainHeader } from "../components/shared/MainHeader";
import { Tabs } from "../components/shared/Tabs";
import { SearchMasonry } from "../components/Search/SearchMasonry";
import { SEARCH_ALL, SEARCH_PLACES, SEARCH_HOTELS } from "../data";
import { SearchInput } from "../components/Search/SearchInput";

const tabs = [
  {
    title: "All",
    content: () => <SearchMasonry key="all" list={SEARCH_ALL} />,
  },
  {
    title: "Places",
    content: () => <SearchMasonry key="places" list={SEARCH_PLACES} />,
  },
  {
    title: "Hotels",
    content: () => <SearchMasonry key="hotels" list={SEARCH_HOTELS} />,
  },
];

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Search" />
      <SearchInput />
      <Tabs items={tabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
