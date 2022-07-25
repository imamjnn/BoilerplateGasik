import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from '@screens/home/Home';
import Example from '@screens/example/Example';

export type AppNavigationParams = {
  Home: undefined;
  Example: undefined;
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
      <Stack.Screen name="Example" component={Example} />
    </Stack.Navigator>
  );
};

export type AppNavigationProps = NativeStackNavigationProp<AppNavigationParams>;
