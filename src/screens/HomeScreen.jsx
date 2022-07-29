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
import ForumScreen from "./ForumScreen";
import CreatePostScreen from "./CreatePostScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Forum"
        component={ForumScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Post"
        component={CreatePostScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    minHeight: 300,
  },
  input: {
    flexDirection: "row",
    backgroundColor: "gainsboro",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    marginBottom: 30,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
  },
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
