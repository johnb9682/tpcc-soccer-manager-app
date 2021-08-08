import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearCache = async () => {
  await AsyncStorage.clear();
};
