import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import {Stack} from './src/navigation/navigationStack';
import {Tab} from './src/navigation/navigationTab';

const App = () => {
  const StackMain = createStackNavigator();
  return (
    <NavigationContainer>
      <StackMain.Navigator screenOptions={{headerShown: false}}>
        <StackMain.Screen name="Login" component={Stack} />
        <StackMain.Screen
          options={{gestureEnabled: false}}
          name="Main"
          component={Tab}
        />
      </StackMain.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
