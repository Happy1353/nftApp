import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {Preview} from './src/pages/Preview/Preview';
import {Login} from './src/pages/Login/Login';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
