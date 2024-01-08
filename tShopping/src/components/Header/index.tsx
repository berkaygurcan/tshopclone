/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import useStore from '../../store/store';
import styles from './styles';
import ShoppingCardIcon from '../ShoppingCartIcon';

const index = ({title}: {title: string}) => {
  const navigation = useNavigation();
  const cart = useStore(state => state.cart);
  const handleCartPress = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftStyle} />

      <Text style={styles.headerCenterStyle}>{title}</Text>
      <TouchableOpacity
        onPress={handleCartPress}
        style={styles.headerRightStyle}>
        <ShoppingCardIcon />
        {cart.length > 0 && (
          <View style={styles.cartProductCountContainer}>
            <Text style={styles.cartProductCountTextStyle}>{cart.length}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default index;
