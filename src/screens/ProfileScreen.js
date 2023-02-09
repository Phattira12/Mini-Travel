import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { colors } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../components/shared/Icon";
import React from "react";

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Icon
              icon="ArrowLeft"
              size={30}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
              <Image
                source={require("../../assets/images/users/user-1.jpeg")}
                style={styles.image}
                resizeMode="center"
              />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Julie
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Photographer
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: "#e7dcc4",
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
              <Text style={[styles.text, styles.subText]}>Followers</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
              <Text style={[styles.text, styles.subText]}>Following</Text>
            </View>
          </View>

          <View style={{ marginTop: 32 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/images/trips/Phuket.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/images/trips/england-london-1.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require("../../assets/images/trips/china.jpg")}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </ScrollView>
          </View>
          <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
          <View style={{ alignItems: "center" }}>
            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text
                  style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                >
                  Started following{" "}
                  <Text style={{ fontWeight: "400" }}>Jake Challeahe</Text> and{" "}
                  <Text style={{ fontWeight: "400" }}>Luis Poteer</Text>
                </Text>
              </View>
            </View>

            <View style={styles.recentItem}>
              <View style={styles.activityIndicator}></View>
              <View style={{ width: 250 }}>
                <Text>
                  Started following <Text>Luke Harper</Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },

  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#ffd07a",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
