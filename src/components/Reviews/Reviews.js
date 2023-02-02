import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Review } from "./Review";
import { spacing } from "../../constants/theme";

export const Reviews = ({ reviews = [] }) => {
  return (
    <View style={styles.container}>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
   container:{
      marginHorizontal: spacing.l
   },
});
