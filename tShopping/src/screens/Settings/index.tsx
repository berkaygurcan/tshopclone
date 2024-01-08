import React from 'react';
import {Button, View} from 'react-native';
import {RemoveFromStorage, StorageType} from '../../utilities/StroageHelper';
import useStore from '../../store/store';
import styles from './styles';

const Settings = () => {
  const handleOnPress = async () => {
    RemoveFromStorage(StorageType.TOKEN);
    useStore.setState({user: undefined});
  };
  return (
    <View style={styles.container}>
      <Button onPress={handleOnPress} title="logout" />
    </View>
  );
};

export default Settings;
