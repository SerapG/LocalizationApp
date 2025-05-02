import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'appLang';

export const getStoredLanguage = async (): Promise<'en' | 'tr' | null> => {
    const lang = await AsyncStorage.getItem(LANGUAGE_KEY);
    if (lang === 'en' || lang === 'tr') { return lang; }
    return null;
};

export const storeLanguage = async (lang: 'en' | 'tr') => {
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
};
