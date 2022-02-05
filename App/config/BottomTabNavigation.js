import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ContactsStackScreen from "./ContactsStackNavigation";
import ActionsStackScreen from "./ActionStackNavigation";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Actions"
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsStackScreen}
        options={{
          tabBarIcon: (props) => <Ionicons name="ios-people-circle-outline" size={props.size} color={props.color} />,
          tabBarLabel: "Contacts",
        }}
      />
      <Tab.Screen
        name="Actions"
        component={ActionsStackScreen}
        options={{
          tabBarIcon: (props) => <Ionicons name="ios-checkmark-circle-outline" size={props.size} color={props.color} />,
          tabBarLabel: "Actions",
        }}
      />
    </Tab.Navigator>
  );
}
