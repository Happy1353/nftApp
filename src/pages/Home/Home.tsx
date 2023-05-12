import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {Choose} from '../../components/Choose/Choose';

import styles from './Home.scss';

export const Home = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{paddingHorizontal: 16}}>
        <View>
          <View></View>
          <Text>12.3 ETH</Text>
        </View>
        <Choose />
      </View>
    </SafeAreaView>
  );
};
