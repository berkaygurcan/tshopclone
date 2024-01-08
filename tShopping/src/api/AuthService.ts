import {AddToStorage, StorageType} from '../utilities/StroageHelper';
import api from './Api';

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  try {
    const response = await api.post('/auth/login', credentials);
    AddToStorage(StorageType.TOKEN, response.data.token);
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    throw error;
  }
};
