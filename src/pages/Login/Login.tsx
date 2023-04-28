import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './Login.scss';
import ETHERSVG from '../../assets/ether.svg';
import EMAILSVG from '../../assets/email.svg';
import LOCKSVG from '../../assets/lock.svg';
import METAMASKSVG from '../../assets/metamask.svg';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Enter</Text>
        </TouchableOpacity>
        <Text style={styles.or}>or</Text>
        <TouchableOpacity style={styles.buttin2}>
          <Text style={styles.button2Text}>Enter via metamask</Text>
          <METAMASKSVG />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
