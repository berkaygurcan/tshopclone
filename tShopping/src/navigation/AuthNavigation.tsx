import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens';

export type AuthNavigationParams = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthNavigationParams>();
const AuthNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AuthNavigation;
