import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";

const ActionsStack = createNativeStackNavigator();

export default function ActionsStackScreen() {
  return (
    <ActionsStack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <ActionsStack.Screen
        name="ActionsList"
        component={ActionsList}
      />
      <ActionsStack.Screen
        name="ActionDetails"
        component={ActionDetails}
      />
    </ActionsStack.Navigator>
  );
}
