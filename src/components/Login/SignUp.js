import React, { useEffect } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import CommonLoading from '../Common/CommonLoading';
import { setEmailText, setEmailTextValid, setIdText, setIdTextValid, setIsLoading, setIsSecurityEntry, setIsValidationEnabled, setNameText, setNameTextValid, setPasswordCheckText, setPasswordCheckTextValid, setPasswordText, setPasswordTextValid, setPhoneText, setPhoneTextValid } from '../../features/signUpSlice';
import SignUpButton from '../../static/Svg/SignUpButton';
import { callPostJoinAPI } from '../../apis/MemberAPI';
import Invisible from '../../static/Svg/Invisible';
import Visible from '../../static/Svg/Visible';



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
    const isValidationEnabled = useSelector(state => state.signup.isValidationEnabled); // 초기값 false
    const isSecurityEntry = useSelector(state => state.signup.isSecurityEntry); // 초기값 true

    /* 유효성 체크용 useEffect */
    useEffect(() => {
        if (isValidationEnabled) {
            dispatch(setIdTextValid(idText !== ''));
        }
    }, [idText, isValidationEnabled]);

    useEffect(() => {
        if (isValidationEnabled) {
            dispatch(setPasswordTextValid(passwordText !== ''));
        }
    }, [passwordText, isValidationEnabled]);

    useEffect(() => {
        if (isValidationEnabled) {
            dispatch(setPasswordCheckTextValid(passwordCheckText === passwordText));
        }
    }, [passwordCheckText, isValidationEnabled]);

    useEffect(() => {
        if (isValidationEnabled) {
            dispatch(setNameTextValid(nameText !== ''));
        }
    }, [nameText, isValidationEnabled]);

    useEffect(() => {
        if (isValidationEnabled) {
            dispatch(setEmailTextValid(emailText !== ''));
        }
    }, [emailText, isValidationEnabled]);

    useEffect(() => {
        if (isValidationEnabled) {
            dispatch(setPhoneTextValid(phoneText !== ''));
        }
    }, [phoneText, isValidationEnabled]);

    /* 긴 요청 처리용 state */
    const isLoading = useSelector(state => state.signup.isLoading);
    const title = route.params?.title ?? 'Agree 컴포넌트에서 보낸 타이틀이 없습니다. 무야호~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';


    const signUpPressHandler = async () => {
        
        /* 핸들러 동작 시 유효성 체크용 useEffect들을 활성화 */
        dispatch(setIsValidationEnabled(true));

        /* 입력 값이 없으면 각 textValid를 초기값과 다르게 하여 false로 설정 */
        dispatch(setIdTextValid(idText !== ''));
        dispatch(setPasswordTextValid(passwordText !== '')); 
        dispatch(setPasswordCheckTextValid(passwordCheckText !== ''));
        dispatch(setNameTextValid(nameText !== '')); 
        dispatch(setEmailTextValid(emailText !== '')); 
        dispatch(setPhoneTextValid(phoneText !== '')); 
        
        console.log('idTextValid: ', idTextValid);
        console.log('passwordTextValid: ', passwordTextValid);
        console.log('passwordCheckTextValid: ', passwordCheckTextValid);
        console.log('nameTextValid: ', nameTextValid);
        console.log('emailTextValid: ', emailTextValid);
        console.log('phoneTextValid: ', phoneTextValid);
        
        if (!idTextValid || !passwordTextValid || !passwordCheckTextValid || !nameTextValid || !emailTextValid || !phoneTextValid || isValidationEnabled === false) {
            return;
        }

        dispatch(setIsLoading(true));
        try {
            await dispatch(callPostJoinAPI());
            navigation.navigate('RegistrationComplete');
        } catch (error) {
            console.error('API 호출 에러 : ', error);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    const inVisiblePressHandler = () => {
        console.log('inVisiblePressHandler');
        dispatch(setIsSecurityEntry(false));
    }

    const visiblePressHandler = () => {
        console.log('visiblePressHandler');
        dispatch(setIsSecurityEntry(true));
    }

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
                    secureTextEntry={isSecurityEntry}
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
                    secureTextEntry={isSecurityEntry}
                />
                {isSecurityEntry ? <Invisible onPress={ inVisiblePressHandler } /> : <Visible onPress={ visiblePressHandler } />}
            </View>
            {!passwordCheckTextValid && <Text>비밀번호가 일치하지 않습니다.</Text>}
            {(passwordCheckTextValid && isValidationEnabled) && <Text>비밀번호가 일치합니다.</Text>}
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