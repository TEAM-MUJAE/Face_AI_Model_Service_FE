import React, { useEffect, useState } from 'react';
import {TouchableOpacity, Image, StyleSheet, TextInput, Text, View, Alert } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import LoginWithTextButton from '../../static/Svg/LoginWithTextButton';
import SignUpWithTextButton from '../../static/Svg/SignUpWithTextButton';
import ForgotIdButton from '../../static/Svg/ForgotIdButton';
import ForgotPasswordButton from '../../static/Svg/ForgotPasswordButton';
import { setIdText, setIsLoading, setPasswordText } from '../../features/loginSlice';
import { callPostLoginAPI } from '../../apis/MemberAPI';

import LogoImage from '../../static/img/logo/logo.png';

function Login() {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const idText = useSelector(state => state.login.idText);
    const passwordText = useSelector(state => state.login.passwordText);

    const isLoading = useSelector(state => state.login.isLoading);
    const title = route.params?.title ?? 'AlGo보니?';

    const loginPressHandler = async () => {

        if (idText === '') {
            Alert.alert('알림', '아이디를 입력해주세요.');
            return;
        }

        if (passwordText === '') {
            Alert.alert('알림', '비밀번호를 입력해주세요.');
            return;
        }
        // navigation.navigate('Home', {
        //     title: '메인 화면'
        // });
        
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

    
    
    return (
        <View style={styles.container}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={{fontSize: 20, marginBottom: 10, color: '#6F50F8', fontWeight: 'bold'}}>{title}</Text>
        <TextInput
            style={styles.input}
            onChangeText={ (text) => { dispatch(setIdText(text)) }}   
            value={idText}
            placeholder="아이디"
        />
        <TextInput
            style={styles.input}
            onChangeText={ (text) => { dispatch(setPasswordText(text)) }}
            value={passwordText}
            placeholder="비밀번호"
        />
        <TouchableOpacity onPress={loginPressHandler} style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SignUpPressHandler} style={styles.button}>
            <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={forgotIdPressHandler} style={styles.link}>
            <Text>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={forgotPassPressHandler} style={styles.link}>
            <Text>비밀번호 찾기</Text>
        </TouchableOpacity> */}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    input: {
      width: '100%',
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 15,
      borderRadius: 5,
    },
    button: {
      width: '100%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      backgroundColor: '#6F50F8',
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
    },
    link: {
      marginTop: 15,
    },
  
    logo: {
      width: 100, // Adjust according to your logo's dimensions
      height: 100, // Adjust according to your logo's dimensions
      marginBottom: 20, // Adjust spacing as needed
      },
     
  
  });

export default Login;