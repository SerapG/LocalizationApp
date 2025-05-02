import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalization } from '../contexts/LocalizationContext';

const LanguageChangeScreen = () => {
    const { translations, changeLanguage, language } = useLocalization();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{translations.welcome}</Text>
            <Button
                title={translations.change_language}
                onPress={() => changeLanguage(language === 'en' ? 'tr' : 'en')}
            />
        </View>
    );
};

export default LanguageChangeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});
