import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

import {LoginInvalid} from '../../utils/toasts';

import styles from './Login.scss';
import ETHERSVG from '../../assets/ether.svg';
import EMAILSVG from '../../assets/email.svg';
import LOCKSVG from '../../assets/lock.svg';

type Props = {
  navigation: any;
};

export const Login = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //simple login logic
  const Login = () => {
    if (email == 'admin' && password == 'password') {
      navigation.navigate('Home');
    } else {
      LoginInvalid();
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <ETHERSVG />
        <Text style={styles.title}>Enter</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </Text>
        <Pressable style={styles.inputContainer}>
          <EMAILSVG />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder={'email'}
            autoCapitalize="none"
            placeholderTextColor={'#FFFFFF'}
          />
        </Pressable>
        <Pressable style={styles.inputContainer}>
          <LOCKSVG />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder={'password'}
            autoCapitalize="none"
            secureTextEntry
            placeholderTextColor={'#FFFFFF'}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={Login}>
          <Text style={styles.button1Text}>Enter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
