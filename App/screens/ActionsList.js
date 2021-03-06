import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";
import Modal from "./Modal";

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
    <Button title="Open Alert" onPress={() => navigation.navigate("Alert")} />
  </View>
);
