import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';


const IBANInputScreen = () => {

    const [iban, setIban] = useState('');
    const [error, setError] = useState('');


    //IBAN duzenleme
    const formatIban = (input: string) => {
        //bosluklari temizleme islemi
        const cleaned = input.replace(/\s+/g, '');
        const withTR = cleaned.startsWith('TR') ? cleaned : 'TR' + cleaned;

        return withTR.match(/.{1,4}/g)?.join(' ') ?? '';
    };

    const handleChange = (text: string) => {
        //inputu formatIban fonk. duzenler
        const formatted = formatIban(text);
        //controlled input, iban state i guncellenir
        setIban(formatted);

        const raw = formatted.replace(/\s+/g, '');
        const onlyNumbers = raw.slice(2).match(/^\d+$/);
        //TR ile basliyor mu ve 26 karakter uzunlukta mi
        const isValid = raw.startsWith('TR') && raw.length === 26 && onlyNumbers;


        if (raw.length >= 7 && !isValid) {
            setError('Gecersiz IBAN numarasi');
        } else {
            setError('');
        }

    };

    return (
        <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    value={iban}
                    onChangeText={handleChange}
                    placeholder="TR00 0000 0000 0000 0000 0000 00"
                    keyboardType="number-pad"
                    maxLength={32}// TR + 24 rakam + 6 bosluk
                    style={[styles.input, error ? styles.inputError : null]}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}

            </View>
        </KeyboardAvoidingView>

    );
};

export default IBANInputScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    inputError: {
        borderBottomColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});
