import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Settings from '../screens/Settings';
import AppTabs from './BottomTabNavigation'

const Drawer = createDrawerNavigator();

export default function AppDrawerScreen() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "left",
          headerShown: false
        }}
      >
        <Drawer.Screen
          name="Tabs"
          component={AppTabs}
          options={{
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={Settings} 
        />
      </Drawer.Navigator>
    );
}
