import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors, sizes, spacing } from "../../constants/theme";
import { SafeAreaView } from "react-navigation";
import { CardFavoriteIcon } from "../shared/Card/CardFavoriteIcon";

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 200;

const FavoritesList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.mediaImageContainer, styles.card]}>
        <Image
          source={require("../../../assets/images/trips/japan.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <CardFavoriteIcon active={true} />
      </View>
      <View style={[styles.mediaImageContainer, styles.card]}>
        <Image
          source={require("../../../assets/images/trips/HandLuggageOnly-itary.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <CardFavoriteIcon active={true} />
      </View>
      <View style={[styles.mediaImageContainer, styles.card]}>
        <Image
          source={require("../../../assets/images/trips/granada-spain.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <CardFavoriteIcon active={true} />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mediaImageContainer: {
    width: 180,
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  card: {
    marginTop: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
});
