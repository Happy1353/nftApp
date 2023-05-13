import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {
  BackdropBlur,
  Canvas,
  Fill,
  Image,
  useImage,
} from '@shopify/react-native-skia';

import nft from '../../assets/nft.jpg';
import nftAvatar from '../../assets/nftAvatar.jpg';
import {NftDescription} from '../NftDescription/NftDescription';

export const Nft = () => {
  const image = useImage(nft);
  const width = Dimensions.get('window').width - 32;

  return (
    <View>
      <Canvas style={{width: width, height: 380}}>
        <Image
          image={image}
          x={0}
          y={0}
          width={width}
          height={380}
          fit="cover"
        />
        <BackdropBlur
          blur={15}
          clip={{x: 0, y: 300, width: width, height: 380}}>
          <Fill color="rgba(0, 0, 0, 0.2)" />
        </BackdropBlur>
      </Canvas>
      <NftDescription />
    </View>
  );
};
