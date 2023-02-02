import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "../shared/Card/Card";
import { CardContent } from "../shared/Card/CardContent";
import { CardMedia } from "../shared/Card/CardMedia";
import { Carousel } from "../shared/Carousel";
import { sizes, colors, spacing } from "../../constants/theme";
import { Icon } from "../shared/Icon";
import { Rating } from "./../shared/Rating/Rating";
import { CardFavoriteIcon } from "../shared/Card/CardFavoriteIcon";

const CARD_HEIGHT = 200;

export const HotelsCarousel = ({ hotels }) => {
  return (
    <Carousel
      items={hotels}
      renderItem={({ item, style }) => {
        return (
          <Card style={[styles.card, style]}>
            <CardFavoriteIcon active={false} onPress={() => {}} />
            <CardMedia source={item.image} />
            <CardContent style={styles.content}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.locationBox}>
                  <Text style={styles.location}>{item.location}</Text>
                  <Icon icon="Location" size={18} style={styles.locationIcon} />
                </View>
                <Rating
                  showLabelInline
                  rating={item.rating}
                  size={12}
                  containerStyle={styles.rating}
                />
              </View>
              <View style={styles.priceBox}>
                <Text style={styles.price}>{item.pricePeerDay}</Text>
                <Text style={styles.priceCaption}>peer day</Text>
              </View>
            </CardContent>
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
  content: {
    height: 88,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2,
  },
  location: {
    fontSize: sizes.caption,
    color: colors.lightGray,
  },
  locationIcon: {
    tintColor: colors.gray,
  },
  rating: {
    marginTop: spacing.m / 2,
  },
  priceBox: {
    alignItems: "flex-end",
    flexShrink: 0,
  },
  price: {
    fontSize: sizes.body,
    fontWeight: "bold",
    color: colors.primary,
  },
  priceCaption: {
    fontSize: sizes.caption,
    color: colors.lightGray,
    marginTop: 2,
  },
});
