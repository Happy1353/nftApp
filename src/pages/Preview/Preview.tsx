import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Preview.scss';
import preview from '../../assets/preview.jpg';

type Props = {
  navigation: any;
};

export const Preview = ({navigation}: Props) => {
  const windowHeight = Dimensions.get('window').height;

  function navigateLogin() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.background}>
      <ImageBackground
        resizeMode="contain"
        source={preview}
        style={styles.backgroundImage}>
        <LinearGradient
          colors={['rgba(0, 31, 63, 0)', 'rgba(0, 31, 63, 0.95)']}
          style={[{height: windowHeight}, styles.contain]}>
          <View>
            <Text style={styles.title}>SUCURITY NFT</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              turpis sed condime. Dolor turpis sed condime
            </Text>
            <TouchableOpacity style={styles.button} onPress={navigateLogin}>
              <Text>Let's go</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};
