import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import useStore from '../store/store';

const Router = () => {
  const {user} = useStore();

  // user değeri varsa isAuthenticated true, yoksa false
  const isAuthenticated = !!user;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Router;
