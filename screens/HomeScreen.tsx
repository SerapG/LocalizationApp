import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/StackNavigator';

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Button title="Dili Değiştir" onPress={() => navigation.navigate('Language')} />
            <View style={styles.spacing} />
            <Button title="IBAN Doğrula" onPress={() => navigation.navigate('IBAN')} />
            <View style={styles.spacing} />
            <Button title="WebView" onPress={() => navigation.navigate('ColorWebView')} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    spacing: {
        height: 16,
    },
});

