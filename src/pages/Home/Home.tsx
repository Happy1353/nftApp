import React from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

import {Choose} from '../../components/Choose/Choose';

import styles from './Home.scss';
import avatar from '../../assets/avatar.jpg';
import ETHERSVG from '../../assets/etherSmall.svg';

export const Home = () => {
  //TODO: connect wallet
  return (
    <SafeAreaView style={styles.background}>
      <View style={{paddingHorizontal: 16}}>
        <View style={[styles.walletContainer, {marginBottom: 16}]}>
          <View style={styles.walletContainer}>
            <View style={styles.walletEtherContainer}>
              <ETHERSVG />
            </View>
            <Text style={styles.walletMoney}>12.3 ETH</Text>
          </View>
          <Image source={avatar} style={styles.walletAvatar} />
        </View>
        <Choose />
      </View>
    </SafeAreaView>
  );
};
