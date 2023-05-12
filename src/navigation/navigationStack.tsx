import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Preview} from '../pages/Preview/Preview';
import {Login} from '../pages/Login/Login';
import {Home} from '../pages/Home/Home';

export const Stack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{gestureEnabled: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Preview" component={Preview} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
