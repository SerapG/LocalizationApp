import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import en from '../localization/locales/en.json';
import tr from '../localization/locales/tr.json';
import { getStoredLanguage, storeLanguage } from '../utils/storage';


type Language = 'en' | 'tr';
type Translations = typeof en;

interface LocalizationContextType {
    language: Language;
    translations: Translations;
    changeLanguage: (lang: Language) => void;
}

const LocalizationContext = createContext<LocalizationContextType | null>(null);

export const useLocalization = () => useContext(LocalizationContext)!;

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [translations, setTranslations] = useState<Translations>(en);

    useEffect(() => {
        const loadLanguage = async () => {
            const storedLang = await getStoredLanguage();
            if (storedLang) {
                setLanguage(storedLang);
                setTranslations(storedLang === 'tr' ? tr : en);
            }
        };
        loadLanguage();
    }, []);

    const changeLanguage = async (lang: Language) => {
        setLanguage(lang);
        setTranslations(lang === 'tr' ? tr : en);
        await storeLanguage(lang);
    };

    return (
        <LocalizationContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LocalizationContext.Provider>
    );
};
