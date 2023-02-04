import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MainHeader } from "../components/shared/MainHeader";
import { ScreenHeader } from "../components/shared/ScreenHeader";
import { SectionHeader } from "../components/shared/SectionHeader";
import { TopPlacesCarousel } from "../components/Home/TopPlacesCarousel";
import { TripsList } from "../components/Home/TripsList";
import { colors } from "../constants/theme";
import { PLACES, TOP_PLACES } from "../data";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Travel App" />
      <ScreenHeader mainTitle="Find your" secoudTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="Popular Trips"
          buttonTitle="See All"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
