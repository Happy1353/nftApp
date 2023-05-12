import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../pages/Home/Home';

import HOMESVG from '../assets/home.svg';
import HOMEFOCUSEDSVG from '../assets/homeFocused.svg';
import STATSVG from '../assets/stat.svg';
import STATFOCUSEDSVG from '../assets/statFocused.svg';
import PERSONSVG from '../assets/person.svg';
import PERSONFOCUSEDSVG from '../assets/personFocused.svg';
import SHOPSVG from '../assets/shop.svg';
import SHOPFOCUSEDSVG from '../assets/shopFocused.svg';

export const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {...styles.container},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{paddingTop: 26}}>
              {focused ? <HOMEFOCUSEDSVG /> : <HOMESVG />}
            </View>
          ),
        }}
        name="Main"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{paddingTop: 26}}>
              {focused ? <STATFOCUSEDSVG /> : <STATSVG />}
            </View>
          ),
        }}
        name="Statistic"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{paddingTop: 26}}>
              {focused ? <SHOPFOCUSEDSVG /> : <SHOPSVG />}
            </View>
          ),
        }}
        name="Shop"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{paddingTop: 26}}>
              {focused ? <PERSONFOCUSEDSVG /> : <PERSONSVG />}
            </View>
          ),
        }}
        name="Profile"
        component={Home}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    height: 60,
  },
});
