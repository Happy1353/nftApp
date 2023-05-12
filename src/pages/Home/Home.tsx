import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import styles from './Home.scss';

export const Home = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text>hi</Text>
    </SafeAreaView>
  );
};
