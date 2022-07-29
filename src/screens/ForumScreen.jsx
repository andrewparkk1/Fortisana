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
import Post from "../components/Post";
import { ScrollView } from "react-native-gesture-handler";

function ForumScreen({ navigation, route }) {
  const [text, onChangeText] = React.useState("");

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ marginTop: 100 }}>
      <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Forum</Text>
          <View style={{ borderWidth: 2, borderRadius: 50 }}>
            <Icon name="user" size={30} />
          </View>
        </View>

        <View style={styles.input}>
          <IconFA name="search" color="gray" size={14} />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"
          />
        </View>
      </View>

      <ScrollView style={{ padding: 20 }}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ScrollView>
    </View>
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

export default ForumScreen;
