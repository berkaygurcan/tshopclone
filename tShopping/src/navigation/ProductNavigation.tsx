import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductDetails, Products} from '../screens';

export type ProductNavigationParams = {
  Products: undefined;
  ProductDetails: {productId: string};
};

const Stack = createStackNavigator<ProductNavigationParams>();
const ProductNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};
export default ProductNavigation;
