import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import App from "./App/index";

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
