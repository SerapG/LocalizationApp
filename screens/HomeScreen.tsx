import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalization } from '../contexts/LocalizationContext';

const HomeScreen = () => {
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

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 16,
    },
});
