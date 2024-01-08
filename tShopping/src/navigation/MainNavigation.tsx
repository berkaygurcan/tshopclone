import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductNavigation from './ProductNavigation';
import {Cart, Settings} from '../screens';

type MainNavigationParams = {
  ProductNavigation: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<MainNavigationParams>();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'purple',
        tabBarLabelStyle: {
          fontSize: 12,
          height: '50%',
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Products',
        }}
        name="ProductNavigation"
        component={ProductNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Cart',
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
