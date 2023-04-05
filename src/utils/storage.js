import AsyncStorage from '@react-native-async-storage/async-storage';

export const RetrieveData = async key => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};

export const StoreData = async (key, item) => {
  try {
    var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
};

export const RemoveData = async key => {
  var res = false;
  try {
    await AsyncStorage.removeItem(key);
    res = true;
  } catch (error) {
    console.log(error);
    res = false;
  }
  return res;
};
