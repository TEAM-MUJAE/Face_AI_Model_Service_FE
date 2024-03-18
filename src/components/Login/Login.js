import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';


import LoginWithTextButton from '../../static/Svg/LoginWithTextButton';
import SignUpWithTextButton from '../../static/Svg/SignUpWithTextButton';
import ForgotIdButton from '../../static/Svg/ForgotIdButton';
import ForgotPasswordButton from '../../static/Svg/ForgotPasswordButton';
import { setChangedTitleText } from '../../features/titleSlice';



function Login() {

    const [idText, setIdText] = useState('');
    const [passwordText, setPasswordText] = useState('');   

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const loginPressHandler = () => {
        console.log('Login Button clicked!');
    }

    const SignUpPressHandler = () => {
        console.log('SignUp Button clicked!');
        dispatch(setChangedTitleText('회원가입'));
        navigation.navigate('Agree');
    }

    const forgotIdPressHandler = () => {
        console.log('ForgotId Button clicked!');
    }   

    const forgotPassPressHandler = () => {
        console.log('ForgotPass Button clicked!');
    }
    
  
    return (
        <View>
            <TextInput
                onChangeText={ setIdText }
                value={ idText }
                placeholder='아이디'
            />
            <TextInput
                onChangeText={ setPasswordText }
                value={ passwordText }
                placeholder='비밀번호'
            />
            <LoginWithTextButton key={ 'loginWithTextButton' } onPress={ loginPressHandler } />
            <SignUpWithTextButton key={ 'signUpWithTextButton' } onPress={ SignUpPressHandler } />
            <ForgotIdButton key={ 'forgotIdButton' } onPress={ forgotIdPressHandler } />
            <ForgotPasswordButton key={ 'forgotPasswordButton' } onPress={ forgotPassPressHandler } />
        </View>
    );
}

export default Login;