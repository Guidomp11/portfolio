import AsyncStorage from '@react-native-async-storage/async-storage';

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if(!value) throw new Error("Key not found");

        return JSON.parse(value);
    } catch(e) {
        throw new Error(error.message);
    }
}

const set = async (key, value) => {
    try {
        if(!value instanceof String) value = JSON.stringify(value);
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        throw new Error(error.message);
    }
}

export {
    get,
    set
};