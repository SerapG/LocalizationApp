import { StyleSheet, TextInput, View, Button, Text, SafeAreaView } from 'react-native';
import React, { useState, useRef } from 'react';

import { WebView as WebViewType } from 'react-native-webview';


const WebViewScreen = () => {

    const [color, setColor] = useState('lightblue');
    const webviewRef = useRef<WebViewType>(null);

    const [isLoaded, setIsLoaded] = useState(false);

    const injectColor = (newColor: string) => {

        const script = `document.body.style.backgroundColor = '${newColor}';`;
        webviewRef.current?.injectJavaScript(script);
    };


    return (
        <SafeAreaView style={styles.container}>
            {!isLoaded && (
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>Yükleniyor...</Text>
                </View>
            )}
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter color."
                    value={color}
                    onChangeText={setColor}
                />
                <Button title="Change Background" onPress={() => injectColor(color)} />
            </View>
            <WebViewType
                onLoadEnd={() => setIsLoaded(true)}
                ref={webviewRef}
                source={{ uri: 'https://www.google.com' }}
                style={styles.webview}
            />
        </SafeAreaView>
    );
};


export default WebViewScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    inputArea: {
        padding: 10,
        backgroundColor: '#eee',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    webview: {
        flex: 1,
        marginTop: 10,
    },
    loading: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
    },
    loadingText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'red',
    },
});
