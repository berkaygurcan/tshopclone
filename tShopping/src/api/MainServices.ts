import api from './Api';

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    throw error;
  }
};

export const getProductsForSpesificCategory = async (category: string) => {
  try {
    const response = await api.get('/products/category/' + category);
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    throw error;
  }
};

export const getProductDetails = async (id: string) => {
  try {
    const response = await api.get('/products/' + id);
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    throw error;
  }
};
