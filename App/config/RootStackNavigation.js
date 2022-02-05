/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppDrawerScreen from "./DrawerNavigation";
import AuthStackScreen from './AuthenticationStackNavigation';
import Loading from '../screens/Loading';
import Modal from '../screens/Modal';

const RootStack = createStackNavigator();

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(!isLoading);
        setUser({});
        }, 500);
    }, []);

    return (
      <RootStack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
          presentation: "modal",
        }}
      >
        {isLoading ? (
          <RootStack.Screen name="Loading" component={Loading} />
        ) : user ? (
          <RootStack.Screen
            name="AppDrawerScreen"
            component={AppDrawerScreen}
          />
        ) : (
          <RootStack.Screen
            name="AuthStackScreen"
            component={AuthStackScreen}
          />
        )}
        <RootStack.Screen
          name="Modal"
          component={Modal}
          options={{
            animationEnabled: true,
          }}
        />
        <RootStack.Screen
          name="Alert"
          component={Modal}
          options={{
            animationEnabled: true,
            cardStyle: {
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: {progress}}) => { 
                return {
                    cardStyle: {
                    opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                }),
              },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.5],
                            extrapolate: 'clamp',
                        })
                    }
            }
          } 
         }}
        />
      </RootStack.Navigator>
    );
}
