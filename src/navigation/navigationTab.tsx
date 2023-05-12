import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../pages/Home/Home';
import {Statistic} from '../pages/Statistic/Statistic';

export const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Statistic" component={Statistic} />
    </Tab.Navigator>
  );
};
