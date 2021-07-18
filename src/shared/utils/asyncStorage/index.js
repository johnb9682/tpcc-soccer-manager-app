import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataObj = async (storageKey, target) => {
  try {
    const jsonValue = JSON.stringify(target);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getDataObj = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removeDataObj = async storageKey => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    throw new Error(e.message);
  }
};
