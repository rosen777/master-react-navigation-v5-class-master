import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContactsList from "../screens/ContactsList";
import ContactDetails from '../screens/ContactDetails';

const ContactsStack = createNativeStackNavigator();

export default function ContactsStackScreen() {
    return (
      <ContactsStack.Navigator
        screenOptions={{
          headerBackground: "red",
          headerShown: false
        }}
      >
        <ContactsStack.Screen
          name="ContactsList"
          component={ContactsList}
          options={{
            headerTitle: "Contacts",
          }}
        />
        <ContactsStack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={({ route }) => {
            return {
              headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
              headerStyle: {
                backgroundColor: "green",
              },
            };
          }}
        />
      </ContactsStack.Navigator>
    );
}
