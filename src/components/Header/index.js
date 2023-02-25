import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.userText}>{name}</Text>
      <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
        <Feather name="user" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 42,
    backgroundColor: "#7159c1",
    paddingTop: statusBarHeight,
    paddingStart: 16,
    paddingEnd: 16,
  },
  userText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonUser: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 50,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
