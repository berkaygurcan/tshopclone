import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageType = {
  TOKEN: 'TOKEN',
};

const AddToStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('AddToStorage Error', error);
  }
};

const RemoveFromStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
const GetFromStorage = async (key: string) => AsyncStorage.getItem(key);
const RemoveAllFromStorage = async () => {
  await AsyncStorage.multiRemove(Object.values(StorageType));
};

export {
  StorageType,
  AddToStorage,
  GetFromStorage,
  RemoveFromStorage,
  RemoveAllFromStorage,
};
