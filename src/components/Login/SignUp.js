import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';


function SignUp() {

    const navigation = useNavigation();


    return (
        <View>
            <Text>회원가입</Text>
            <TextInput
                placeholder='아이디'
            />
            <TextInput
                placeholder='비밀번호'
            />
            <TextInput
                placeholder='비밀번호 확인'
            />
        </View>
    );
}

export default Login;