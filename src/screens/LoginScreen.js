import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import Login from '../components/Login/Login';



function LoginScreen() {

    return (
        <ScrollView>
            <Header />
            <Login />
        </ScrollView>
    );
}

export default LoginScreen;