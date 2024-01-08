import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../components';
import useStore from '../../store/store';
import {Product} from '../../types/Products';
import {CrossIcon} from '../../common/assets/icons';
import styles from './styles';
import {
  calculateCategoryTotal,
  calculateCartTotal,
  calculateDiscount,
} from './functions';

const Cart = () => {
  // Sepet durumunu alın
  const cart = useStore(state => state.cart);
  const removeFromCart = useStore(state => state.removeFromCart);

  const handleDeleteItem = (itemId: number) => {
    removeFromCart(itemId);
  };

  const electronicCategoryTotal = calculateCategoryTotal('electronics', cart);
  const jeweleryCategoryTotal = calculateCategoryTotal('jewelery', cart);
  const electronicDiscount = calculateDiscount(
    'electronics',
    electronicCategoryTotal,
  );
  const jewelleryDiscount = calculateDiscount(
    'jewelery',
    jeweleryCategoryTotal,
  );

  const renderItem = ({item}: {item: {product: Product; quantity: number}}) => {
    const {product, quantity} = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageAndTextsContainer}>
          <Image
            style={styles.itemImage}
            source={{
              uri: product.image,
            }}
          />
          <View style={styles.textsContainer}>
            <Text>{product.title}</Text>
            <Text>Quantity: {quantity.toString()}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.crossIconStyle}
          onPress={() => handleDeleteItem(product.id)}>
          <CrossIcon />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cart" />
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.product.id.toString()}
      />
      <View style={styles.totalSectionContainer}>
        <Text>Sub Total {calculateCartTotal(cart)} TL</Text>

        <View style={styles.discountTextsContainer}>
          {electronicDiscount > 0 && (
            <Text>Electronic Category %5 -{electronicDiscount}TL</Text>
          )}
          {jewelleryDiscount > 0 && (
            <Text>Jewellery Category %15 -{jewelleryDiscount}TL</Text>
          )}
        </View>

        <Text style={styles.totalTextStyle}>
          TOTAL{' '}
          {calculateCartTotal(cart) - electronicDiscount - jewelleryDiscount}
        </Text>
      </View>

      <TouchableOpacity style={styles.cardButtonStyle}>
        <Text style={styles.cardButtonTitle}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
