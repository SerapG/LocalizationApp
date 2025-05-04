import { StyleSheet, Text, View, TextInput, Button, Platform, Keyboard, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        Keyboard.dismiss();
        console.log('Giris yapiliyor..', email, password);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
                keyboardVerticalOffset={50}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <Text style={styles.title}>Hoş Geldin!</Text>

                    <Text style={styles.fakeBox}>Bilgi Kutusu!</Text>
                    <Text style={styles.fakeBox}> Uygulama Tanıtımı</Text>
                    <Text style={styles.fakeBox}>Güncellemeler</Text>
                    <Text style={styles.fakeBox}>Bize ulasin</Text>
                    <Text style={styles.fakeBox}>İçeriklerimiz</Text>
                    <Text style={styles.fakeBox}>İçeriklerimiz</Text>
                    <Text style={styles.fakeBox}>Aldıklarımız</Text>
                    <Text style={styles.fakeBox}>Hizmetlerimiz</Text>


                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="default"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        keyboardType="default"
                        secureTextEntry
                    />

                    <View style={styles.buttonContainer}>
                        <Button title="Giriş Yap" onPress={handleLogin} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        padding: 20,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 15,
        borderRadius: 6,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 40,
    },
    fakeBox: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
    },
});
