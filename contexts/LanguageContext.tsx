import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '../localization/i18n';
import { getStoredLanguage, storeLanguage } from '../utils/storage';
import { useCustomStateReducer } from '../hooks/useCustomStateReducer';

type LanguageContextType = {
    language: 'en' | 'tr';
    changeLanguage: (lang: 'en' | 'tr') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { state, update } = useCustomStateReducer({ language: 'en' });
    const [isReady, setIsReady] = useState(false);

    // AsyncStorage'dan dili yükle
    useEffect(() => {
        (async () => {
            const storedLang = await getStoredLanguage();
            if (storedLang) {
                update('language', storedLang);
                i18n.changeLanguage(storedLang);
            }
            setIsReady(true);
        })();
    }, [update]);

    // Dili değiştir
    const changeLanguage = (lang: 'en' | 'tr') => {
        update('language', lang);
        i18n.changeLanguage(lang);
        storeLanguage(lang);
    };

    if (!isReady) {
        return null;
    }// Dil yüklenmeden uygulamayı başlatma

    return (
        <LanguageContext.Provider value={{ language: state.language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Dili kullanmak için hook
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
