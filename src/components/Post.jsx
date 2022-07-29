import {
  createNativeStackNavigator,
  NavigationContainer,
} from "@react-navigation/native-stack";
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
import IconFA from "react-native-vector-icons/FontAwesome";

function Post() {
  return (
    <SafeAreaView>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.postTitle}>Hello title</Text>
          <Text style={styles.time}>1 hr</Text>
        </View>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>

        <View style={styles.flexBetween}>
          <View style={styles.postBottom}>
            <IconFA name="circle" color="green" size={14} />
            <Text style={{ paddingLeft: 5, paddingRight: 15 }}>LGBTQIA</Text>
          </View>

          {/* <IconFA name="circle" color="gray" size={3} /> */}
          <Text style={{ color: "gray" }}>Freshman at UCLA</Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.postBottom}>
            <Icon name="heart" color="gray" size={14} />
            <Text style={styles.postBottomText}>127</Text>
          </View>
          <View style={styles.postBottom}>
            <Icon name="message-circle" color="gray" size={14} />
            <Text style={styles.postBottomText}>127</Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: "gray",
            marginVertical: 10,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {},
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 10,
  },
  postHeader: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingBottom: 5,
  },
  time: {
    color: "slategray",
    fontSize: 13,
  },
  postBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  postBottomText: {
    paddingLeft: 5,
    paddingRight: 15,
    color: "gray",
  },
});

export default Post;
