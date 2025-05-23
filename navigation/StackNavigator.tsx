import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import IBANInputScreen from '../screens/IBANInputScreen';
import LangChangeScreen from '../screens/LangChangeScreen';
import WebViewScreen from '../screens/WebViewScreen';
import LoginScreen from '../screens/LoginScreen';
import UserListScreen from '../screens/UserListScreen';
import DateChallengeScreen from '../screens/DateChallengeScreen';


export type RootStackParamList = {
    Home: undefined;
    IBAN: undefined;
    Language: undefined;
    ColorWebView: undefined;
    Login: undefined;
    UserList: undefined;
    DateChallenge: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Language" component={LangChangeScreen} />
                <Stack.Screen name="IBAN" component={IBANInputScreen} />
                <Stack.Screen name="ColorWebView" component={WebViewScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="UserList" component={UserListScreen} />
                <Stack.Screen name="DateChallenge" component={DateChallengeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
