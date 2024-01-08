/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {
  getAllCategories,
  getAllProducts,
  getProductsForSpesificCategory,
} from '../../api/MainServices';
import {Card, Header, Loader} from '../../components';
import {Product} from '../../types/Products';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Products = () => {
  const [productLists, setProductLists] = useState<Product[]>([]);
  const [productListsSpesificCategory, setProductListsSpesificCategory] =
    useState<Product[]>([]);
  const [categories, setCategories] = useState<String[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (search) {
      timer = setTimeout(() => {
        // Burada arama işlemini gerçekleştirin. Örnek:
        const filteredProducts = productListsSpesificCategory.filter(product =>
          product.title.toLowerCase().includes(search.toLowerCase()),
        );
        setProductListsSpesificCategory(filteredProducts);
      }, 500);
    } else {
      // Kullanıcı yazmayı bıraktığında veya arama sıfırlandığında mevcut kategoriye geri dönün
      setProductListsSpesificCategory(
        productLists.filter(product => product.category === selectedCategory),
      );
    }

    // Temizleme işlemi
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const init = async () => {
    setIsLoading(true);
    try {
      const products = await getAllProducts();
      const allCategories = await getAllCategories();
      setProductLists(products);
      setCategories(allCategories);
    } catch (error) {
      Alert.alert('Alert Title', 'Bilinmeyen bir hata oluştu', [{text: 'OK'}], {
        cancelable: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  //ProductListFuncs
  const getThreeProductForCategory = (category: string) => {
    return productLists
      .filter(product => product.category === category)
      .slice(0, 3);
  };

  const handleSelectedCategory = async (item: string) => {
    setIsLoading(true);
    const products = await getProductsForSpesificCategory(item);
    setProductListsSpesificCategory(products);
    setIsLoading(false);
    setSelectedCategory(item);
  };

  const renderItem = (item: string) => {
    const categoryProducts = getThreeProductForCategory(item);
    return (
      <>
        <TouchableOpacity onPress={() => handleSelectedCategory(item)}>
          <Text style={styles.renderItemHeaderText}>{item}</Text>
        </TouchableOpacity>
        <View style={styles.itemWrapper}>
          {categoryProducts.map(product => (
            <Card
              product={product}
              onPress={() => {
                navigation.navigate('ProductDetails', {
                  productId: product.id.toString(),
                });
              }}
            />
          ))}
        </View>
      </>
    );
  };

  //ProductListForCategoryFuncs
  const renderItemPlsc = (item: Product) => {
    return (
      <Card
        product={item}
        imageStyle={styles.itemImageProductForCategory}
        containerStyle={{marginHorizontal: 20}}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: item.id.toString(),
          });
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.pageLoader}>
          <Loader />
        </View>
      )}
      <Header title={selectedCategory ? selectedCategory : 'Product Lists'} />
      {!selectedCategory ? (
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={categories}
          renderItem={({item}) => renderItem(item)}
        />
      ) : (
        <>
          <TextInput
            onChangeText={text => setSearch(text)}
            placeholder="search..."
            value={search}
            style={styles.searchStyle}
          />
          <FlatList
            contentContainerStyle={styles.itemContentContainerStyle}
            data={productListsSpesificCategory}
            keyExtractor={item => item.name}
            renderItem={({item}) => renderItemPlsc(item)}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Products;
