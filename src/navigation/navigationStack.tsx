import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Preview} from '../pages/Preview/Preview';
import {Login} from '../pages/Login/Login';

export const Stack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Preview" component={Preview} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
