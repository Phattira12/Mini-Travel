import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, sizes } from "../../constants/theme";
import { Carousel } from "../shared/Carousel";
import { Card } from "../shared/Card/Card";
import { CardMedia } from "../shared/Card/CardMedia";
import { CardFavoriteIcon } from "../shared/Card/CardFavoriteIcon";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const CARD_HEIGHT = 200;

export const TopPlacesCarousel = ({ list }) => {
  const navigation = useNavigation();
  return (
    <Carousel
      items={list}
      renderItem={({ item, style }) => {
        return (
          <Card
            style={[styles.card, style]}
            shadowType="dark"
            onPress={() => {
              navigation.navigate("TripDetails", { trip: item });
            }}
          >
            <CardFavoriteIcon active={true} onPress={() => {}} />
            <SharedElement
              id={`trip.${item.id}.image`}
              style={StyleSheet.absoluteFillObject}
            >
              <CardMedia source={item.image} borderBottomRadius />
            </SharedElement>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </Card>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
  },
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
});
