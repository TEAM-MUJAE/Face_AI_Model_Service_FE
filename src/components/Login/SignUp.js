import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import CommonLoading from '../Common/CommonLoading';
import { setEmailText, setEmailTextValid, setIdText, setIdTextValid, setIsLoading, setNameText, setNameTextValid, setPasswordCheckText, setPasswordCheckTextValid, setPasswordText, setPasswordTextValid, setPhoneText, setPhoneTextValid } from '../../features/signUpSlice';
import SignUpButton from '../../static/Svg/SignUpButton';
import { callPostJoinAPI } from '../../apis/MemberAPI';



function SignUp() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    /* 입력값 추적용 state */ 
    const idText = useSelector(state => state.signup.idText);
    const passwordText = useSelector(state => state.signup.passwordText);
    const passwordCheckText = useSelector(state => state.signup.passwordCheckText);
    const nameText = useSelector(state => state.signup.nameText);
    const emailText = useSelector(state => state.signup.emailText);
    const phoneText = useSelector(state => state.signup.phoneText);
    
    /* 유효성 체크용 state */ 
    const idTextValid = useSelector(state => state.signup.idTextValid);
    const passwordTextValid = useSelector(state => state.signup.passwordTextValid);
    const passwordCheckTextValid = useSelector(state => state.signup.passwordCheckTextValid);
    const nameTextValid = useSelector(state => state.signup.nameTextValid);
    const emailTextValid = useSelector(state => state.signup.emailTextValid);
    const phoneTextValid = useSelector(state => state.signup.phoneTextValid);

    /* 긴 요청 처리용 state */
    const isLoading = useSelector(state => state.signup.isLoading);
    const title = route.params?.title ?? 'Agree 컴포넌트에서 보낸 타이틀이 없습니다. 무야호~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';


    const signUpPressHandler = async () => {

        dispatch(setIdTextValid(idText !== '')); // 아이디 입력값이 없으면 idTextValid 를 false, 있으면 true로 설정
        dispatch(setPasswordTextValid(passwordText !== '')); // 비밀번호 입력값이 없으면 passwordTextValid 를 false, 있으면 true로 설정
        dispatch(setPasswordCheckTextValid(passwordCheckText !== '')); // 비밀번호 확인 입력값이 없으면 passwordCheckTextValid 를 false, 있으면 true로 설정
        dispatch(setNameTextValid(nameText !== '')); // 이름 입력값이 없으면 nameTextValid 를 false, 있으면 true로 설정
        dispatch(setEmailTextValid(emailText !== '')); // 이메일 입력값이 없으면 emailTextValid 를 false, 있으면 true로 설정
        dispatch(setPhoneTextValid(phoneText !== '')); // 휴대폰 번호 입력값이 없으면 phoneTextValid 를 false, 있으면 true로 설정
        
        console.log('idTextValid: ', idTextValid);
        console.log('passwordTextValid: ', passwordTextValid);
        console.log('passwordCheckTextValid: ', passwordCheckTextValid);
        console.log('nameTextValid: ', nameTextValid);
        console.log('emailTextValid: ', emailTextValid);
        console.log('phoneTextValid: ', phoneTextValid);
        
        if (!idTextValid || !passwordTextValid || !passwordCheckTextValid || !nameTextValid || !emailTextValid || !phoneTextValid) {
            return;
        }

        
    };

    if (isLoading) {
        return (
            <View>
                <CommonLoading />
            </View>
        );
    }

    return (
        <View>
            <ScreenTitle title={ title }/>
            <View style={{
                borderColor: idTextValid ? 'black' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    value={ idText }
                    onChangeText={ (text) => dispatch(setIdText(text)) }
                    placeholder='아이디'
                />
            </View>
            {!idTextValid && <Text>아이디는 필수로 입력해야 합니다.</Text>}
            <View style={{
                borderColor: passwordTextValid ? 'black' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    value={ passwordText }
                    onChangeText={ (text) => dispatch(setPasswordText(text)) }
                    placeholder='비밀번호'
                />
            </View>
            {!passwordTextValid && <Text>비밀번호는 필수로 입력해야 합니다.</Text>}
            <View style={{
                borderColor: passwordCheckTextValid ? 'black' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    value={ passwordCheckText }
                    onChangeText={ (text) => dispatch(setPasswordCheckText(text)) }
                    placeholder='비밀번호 확인'
                />
            </View>
            {!passwordCheckTextValid && <Text>비밀번호 확인은 필수로 입력해야 합니다.</Text>}
            <View style={{
                borderColor: nameTextValid ? 'black' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    value={ nameText }
                    onChangeText={ (text) => dispatch(setNameText(text)) }
                    placeholder='이름'
                />
            </View>
            {!nameTextValid && <Text>이름은 필수로 입력해야 합니다.</Text>}
            <View style={{
                borderColor: emailTextValid ? 'black' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    value={ emailText }
                    onChangeText={ (text) => dispatch(setEmailText(text)) }
                    placeholder='이메일'
                />
            </View>
            {!emailTextValid && <Text>이메일은 필수로 입력해야 합니다.</Text>}
            <View style={{
                borderColor: phoneTextValid ? 'black' : 'red',
                borderWidth: 1,
                borderRadius: 5,
                margin: 10
            }}>
                <TextInput
                    value={ phoneText }
                    onChangeText={ (text) => dispatch(setPhoneText(text)) }
                    placeholder='휴대폰 번호'
                />
            </View>
            {!phoneTextValid && <Text>전화번호는 필수로 입력해야 합니다.</Text>}
            <SignUpButton onPress={ signUpPressHandler }/>
        </View>
    );
}

const style = StyleSheet.create({
    textInputBoxContainer: {
        
    }
});

export default SignUp;