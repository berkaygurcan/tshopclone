import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import Router from './src/navigation/Router';
import SplashScreen from 'react-native-splash-screen';
import {GetFromStorage, StorageType} from './src/utilities/StroageHelper';
import useStore from './src/store/store';

function App(): JSX.Element {
  useEffect(() => {
    getStorageToken();
  }, []);

  const getStorageToken = async () => {
    const token = await GetFromStorage(StorageType.TOKEN);
    if (token) {
      useStore.setState({user: token});
    }
  };
  setTimeout(() => {
    SplashScreen.hide();
  }, 3000);
  return <Router />;
}

export default App;
