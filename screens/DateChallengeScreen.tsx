import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const calculateDate = (date: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    return age;
};

const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6;
};

const DateChallengeScreen = () => {

    const [inputDate, setInputDate] = useState('');
    const [age, setAge] = useState<number | null>(null);
    const [weekend, setWeekend] = useState<boolean | null>(null);

    const handleCalculate = () => {
        const parsedDate = new Date(inputDate);
        const isValid = !isNaN(parsedDate.getTime());

        if (!isValid) {
            Alert.alert('Hatali Tarih', 'Formata uygun giris yapiniz(YYYY-MM-DD)');
            return;
        }
        setAge(calculateDate(parsedDate));
        setWeekend(isWeekend(parsedDate));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tarih Challenge</Text>

            <Text style={styles.label}>Doğum Tarihi (YYYY-MM-DD):</Text>

            <TextInput
                style={styles.input}
                placeholder="1990-06-15"
                value={inputDate}
                onChangeText={setInputDate}
                keyboardType="numbers-and-punctuation"
            />

            <Button title="Hesapla" onPress={handleCalculate} />

            {age !== null && weekend !== null && (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>Yaş: {age}</Text>
                    <Text style={styles.resultText}>
                        Hafta sonu mu? {weekend ? 'Evet' : 'Hayir'}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default DateChallengeScreen

const styles = StyleSheet.create({
    container: { padding: 16, marginTop: 50 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    label: { marginBottom: 8 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
    },
    resultBox: {
        marginTop: 24,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    resultText: {
        fontSize: 16,
        marginBottom: 4,
    },
});
