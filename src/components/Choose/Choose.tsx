import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import styles from './Choose.scss';
import {nfts} from '../../utils/list';

export const Choose = () => {
  const [choose, setChoose] = useState(0);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={nfts}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={choose == index ? styles.containerActive : styles.container}
          onPress={() => setChoose(index)}>
          <Text style={choose == index ? styles.textActive : styles.text}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};
