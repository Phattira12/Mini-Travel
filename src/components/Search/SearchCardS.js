// import { Card } from "../shared/Card/Card";
// import { CardMedia } from "../shared/Card/CardMedia";
// import { CardContent } from "../shared/Card/CardContent";
// import { CardFavoriteIcon } from "../shared/Card/CardFavoriteIcon";
// import { SharedElement } from "react-navigation-shared-element";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import { sizes, spacing, colors } from "../../constants/theme";
// import Animated, { FadeInDown } from "react-native-reanimated";
// import { useNavigation } from "@react-navigation/native";
// import React from "react";

// export const SearchCardS = ({ data, input, setInput, index }) => {
//   const navigation = useNavigation();
//   const even = index % 2 === 0;
//   return (
//     <>
//       <View>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           if (input === "") {
//             return (
//               <Animated.View
//                 entering={FadeInDown.delay(index < 6 ? index * 80 : 0)}
//                 style={{
//                   paddingTop: index === 1 ? spacing.l : 0,
//                   paddingLeft: !even ? spacing.l / 2 : 0,
//                   paddingRight: even ? spacing.l / 2 : 0,
//                   paddingBottom: spacing.l,
//                 }}
//               >
//                 <Card
//                   onPress={() => {
//                     item.type === "PLACE"
//                       ? navigation.navigate("TripDetails", { trip: item })
//                       : null;
//                   }}
//                   style={{ width: "100%", height: index % 3 === 0 ? 180 : 240 }}
//                 >
//                   <CardFavoriteIcon onPress={() => {}} />
//                   <SharedElement
//                     id={`trip.${item.id}.image`}
//                     style={styles.media}
//                   >
//                     <CardMedia source={item.image} borderBottomRadius />
//                   </SharedElement>
//                   <CardContent>
//                     <View style={styles.titleBox}>
//                       <Text style={styles.title} numberOfLines={1}>
//                         {item.title}
//                       </Text>
//                       <Text style={styles.location}>{item.location}</Text>
//                     </View>
//                   </CardContent>
//                 </Card>
//               </Animated.View>
//             );
//           }
//           if (item.title.toLowerCase().includes(input.toLowerCase())) {
//             return (
//               <Animated.View
//                 entering={FadeInDown.delay(index < 6 ? index * 80 : 0)}
//                 style={{
//                   paddingTop: index === 1 ? spacing.l : 0,
//                   paddingLeft: !even ? spacing.l / 2 : 0,
//                   paddingRight: even ? spacing.l / 2 : 0,
//                   paddingBottom: spacing.l,
//                 }}
//               >
//                 <Card
//                   onPress={() => {
//                     item.type === "PLACE"
//                       ? navigation.navigate("TripDetails", { trip: item })
//                       : null;
//                   }}
//                   style={{ width: "100%", height: index % 3 === 0 ? 180 : 240 }}
//                 >
//                   <CardFavoriteIcon onPress={() => {}} />
//                   <SharedElement
//                     id={`trip.${item.id}.image`}
//                     style={styles.media}
//                   >
//                     <CardMedia source={item.image} borderBottomRadius />
//                   </SharedElement>
//                   <CardContent>
//                     <View style={styles.titleBox}>
//                       <Text style={styles.title} numberOfLines={1}>
//                         {item.title}
//                       </Text>
//                       <Text style={styles.location}>{item.location}</Text>
//                     </View>
//                   </CardContent>
//                 </Card>
//               </Animated.View>
//             );
//           }
//         }}
//       />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   media: {
//     flex: 1,
//   },
//   titleBox: {
//     flex: 1,
//   },
//   title: {
//     fontSize: sizes.body,
//     fontWeight: "bold",
//     color: colors.primary,
//     marginVertical: 4,
//   },
//   location: {
//     fontSize: sizes.body,
//     color: colors.lightGray,
//   },
// });
