/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Alert, Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import useStore from '../../store/store';
import styles from './styles';
import {Loader} from '../../components';

const Login = () => {
  const [username, setMail] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');

  // Zustand store
  const {loginUser, isLoading, error} = useStore();

  const handleLogin = async () => {
    const credentials = {username, password};
    await loginUser(credentials);
    error && errorAlert();
  };

  const errorAlert = () =>
    Alert.alert('Alert Title', error!, [{text: 'OK'}], {cancelable: false});

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.pageLoader}>
          <Loader />
        </View>
      )}

      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Login</Text>
        <TextInput
          onChangeText={text => setMail(text)}
          placeholder="enter your username"
          value={username}
          style={styles.inputStyle}
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholder="enter your password"
          value={password}
          style={styles.inputStyle}
        />
        <View style={styles.btnContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
