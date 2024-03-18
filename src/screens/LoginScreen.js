import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Common/Header';
import Login from '../components/Login/Login';
import ScreenTitle from '../components/Common/ScreenTitle';


function LoginScreen() {

    return (
        <ScrollView>
            <Header />
            <ScreenTitle />
            <Login />
        </ScrollView>
    );
}

export default LoginScreen;