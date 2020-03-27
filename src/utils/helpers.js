import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (userData) => {
    try {
        await AsyncStorage.setItem('@userData', JSON.stringify(userData));
    } catch (e) {
        // saving error
    }
}

export const getData = async () => {

    try {
      const value = await AsyncStorage.getItem('@userData')
      if(value !== null) {
        // value previously stored
       return JSON.parse(value);
      }
    } catch(e) {
      // error reading value
    }
    
}