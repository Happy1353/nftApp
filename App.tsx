import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import {Stack} from './src/navigation/navigationStack';
import {Tab} from './src/navigation/navigationTab';

const App = () => {
  return (
    <NavigationContainer>
      <Tab />
      <Toast />
    </NavigationContainer>
  );
};

export default App;
