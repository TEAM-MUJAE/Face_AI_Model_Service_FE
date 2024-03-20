import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Alert } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import LoginWithTextButton from '../../static/Svg/LoginWithTextButton';
import SignUpWithTextButton from '../../static/Svg/SignUpWithTextButton';
import ForgotIdButton from '../../static/Svg/ForgotIdButton';
import ForgotPasswordButton from '../../static/Svg/ForgotPasswordButton';
import { setIdText, setIsLoading, setPasswordText } from '../../features/loginSlice';
import { callPostLoginAPI } from '../../apis/MemberAPI';


function Login() {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const idText = useSelector(state => state.login.idText);
    const passwordText = useSelector(state => state.login.passwordText);

    const isLoading = useSelector(state => state.login.isLoading);
    const title = route.params?.title ?? '지정된 타이틀 없음 무야호~~~~';

    const loginPressHandler = async () => {

        if (idText === '') {
            Alert.alert('알림', '아이디를 입력해주세요.');
            return;
        }

        if (passwordText === '') {
            Alert.alert('알림', '비밀번호를 입력해주세요.');
            return;
        }
        
        try {
            console.log('idText: ', idText);
            console.log('passwordText: ', passwordText);
            await dispatch(callPostLoginAPI());
            navigation.navigate('Home', {
                title: '메인 화면'
            });
        } catch (error) {
            console.log('API 호출 에러 : ', error);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

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

    if (isLoading) {
        return (
            <View>
                <Text>로그인 중...</Text>
            </View>
        );
    }
    
    return (
        <View>
            <ScreenTitle title={ title } />
            <TextInput
                onChangeText={ (text) => { dispatch(setIdText(text)) }}
                value={ idText }
                placeholder='아이디'
            />
            <TextInput
                onChangeText={ (text) => { dispatch(setPasswordText(text)) }}
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