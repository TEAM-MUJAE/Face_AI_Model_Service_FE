import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';


import ScreenTitle from '../Common/ScreenTitle';
import LoginWithTextButton from '../../static/Svg/LoginWithTextButton';
import SignUpWithTextButton from '../../static/Svg/SignUpWithTextButton';
import ForgotIdButton from '../../static/Svg/ForgotIdButton';
import ForgotPasswordButton from '../../static/Svg/ForgotPasswordButton';




function Login() {
    
    const navigation = useNavigation();
    const route = useRoute();

    const [idText, setIdText] = useState('');
    const [passwordText, setPasswordText] = useState('');   

    const title = route.params?.title ?? '지정된 타이틀 없음 무야호~~~~';

    const loginPressHandler = () => {
        console.log('Login Button clicked!');
    }

    const SignUpPressHandler = () => {
        navigation.navigate('Agree', {
            title: '회원가입-이용약관'
        });
    }

    const forgotIdPressHandler = () => {
        console.log('ForgotId Button clicked!');
    }   

    const forgotPassPressHandler = () => {
        console.log('ForgotPass Button clicked!');
    }
    
    return (
        <View>
            <ScreenTitle title={ title } />
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