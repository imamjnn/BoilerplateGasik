import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from '@screens/home/Home';
import About from '@screens/about/About';

export type AppNavigationParams = {
  Home: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export type AppNavigationProps = NativeStackNavigationProp<AppNavigationParams>;
