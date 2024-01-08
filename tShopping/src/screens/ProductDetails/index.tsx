import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Card, Header, Loader} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getProductDetails} from '../../api/MainServices';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useStore from '../../store/store';
import styles from './styles';

const ProductDetails = () => {
  const route = useRoute();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const {productId}: {productId: string} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setIsLoading(true);
    const product = await getProductDetails(productId);
    setProduct(product);
    setIsLoading(false);
  };

  const handleOnPress = () => {
    addToCart(product!);
  };

  const addToCart = useStore(state => state.addToCart);
  return (
    <>
      <SafeAreaView style={styles.container}>
        {isLoading && (
          <View style={styles.pageLoader}>
            <Loader />
          </View>
        )}
        <Header title={product?.title || ''} />
        <View>
          {product && (
            <Card
              toucbleDisable
              product={product}
              titleNumberOfLines={0}
              inputNameTextStyle={styles.inputNameTextStyle}
              textPriceStyle={styles.textPriceStyle}
              imageStyle={styles.imageStyle}
              disablePress
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId: productId.toString(),
                });
              }}
            />
          )}
          <TouchableOpacity
            onPress={handleOnPress}
            style={styles.cardButtonStyle}>
            <Text style={styles.cardButtonTitle}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProductDetails;
