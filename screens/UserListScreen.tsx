import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

type User = {
    id: number;
    name: string;
    email: string;
};

const UserListScreen = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setloading] = useState(false);

    const fetchUsers = async () => {
        try {
            setloading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Veri cekme hatasi:', error);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        fetchUsers(); //İlk mounta verileri cek
    }, []);

    return (
        <View style={styles.container}>
            <Button title="Verileri Yenile" onPress={fetchUsers} />

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
            ) : (
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.email}>{item.email}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default UserListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
    },
    loader: {
        marginTop: 20,
    },
    item: {
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#f2f2f2',
        borderRadius: 6,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    email: {
        color: '#555',
    },
});
