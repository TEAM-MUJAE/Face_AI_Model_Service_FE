import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import SignUp from '../components/Login/SignUp';


function SignUpScreen() {

    return (
        <ScrollView>
            <SignUp />
        </ScrollView>
    );
}

export default SignUpScreen;