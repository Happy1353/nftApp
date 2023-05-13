import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

import styles from './NftDescription.scss';
import nftAvatar from '../../assets/nftAvatar.jpg';
import ETHERSVG from '../../assets/etherSmall.svg';

export const NftDescription = () => {
  const width = Dimensions.get('window').width - 32;

  return (
    <View style={{position: 'absolute'}}>
      <View style={{height: 300}} />
      <View
        style={{
          height: 80,
          width: width,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={nftAvatar} style={{width: 40, height: 40}} />
          <View style={{paddingLeft: 16}}>
            <Text style={styles.textOwner}>Owned by</Text>
            <Text style={styles.textOwnerName}>Sucuri</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <ETHERSVG width={20} height={20} />
          <Text style={styles.priceText}>0.4 ETH</Text>
        </View>
      </View>
    </View>
  );
};
