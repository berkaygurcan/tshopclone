import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  ImageStyle,
  ViewStyle,
} from 'react-native'; // ImageStyle ekledik
import {Product} from '../../types/Products';
import styles from './styles';

interface Props {
  product: Product;
  imageStyle?: ImageStyle; // imageStyle tipini ImageStyle olarak güncelledik,
  containerStyle?: ViewStyle;
  titleNumberOfLines?: number;
  inputNameTextStyle?: ViewStyle;
  textPriceStyle?: ViewStyle;
  disablePress?: boolean;
  onPress: Function;
}

const index = ({
  product,
  imageStyle,
  containerStyle,
  titleNumberOfLines,
  inputNameTextStyle,
  textPriceStyle,
  disablePress,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      testID="card-touchable"
      disabled={disablePress}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image
        style={[styles.itemImage, imageStyle]}
        source={{
          uri: product.image,
        }}
      />
      <Text
        testID="card-title-text"
        numberOfLines={titleNumberOfLines ?? 1}
        style={[styles.inputNameText, inputNameTextStyle]}>
        {product.title}
      </Text>
      <Text style={[textPriceStyle]}> {product.price + ' TL'}</Text>
    </TouchableOpacity>
  );
};

export default index;
