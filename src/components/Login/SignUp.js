import React, { useEffect } from 'react';
import {Dimensions, TouchableOpacity, TextInput, Text, View, StyleSheet, ScrollView } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import CommonLoading from '../Common/CommonLoading';
import { setSignEmailText, setEmailTextValid, setSignIdText, setIdTextValid, setIsLoading, setIsSecurityEntry, setIsValidationEnabled, setSignNameText, setNameTextValid, setSignPasswordCheckText, setPasswordCheckTextValid, setSignPasswordText, setPasswordTextValid, setSignPhoneText, setPhoneTextValid } from '../../features/signUpSlice';
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
    }, [passwordCheckText, passwordText, isValidationEnabled]);

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

    /* 중복체크용 state */

    /* 중복체크용 useEffect */


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
            navigation.navigate('RegistrationResult');
        } catch (error) {
            console.log('회원가입 에러 발생: ', error);
        } finally {
            dispatch(setIsLoading(false));
        }
        // const response = await dispatch(callPostJoinAPI());
        // if (response.payload) {
        //     navigation.navigate('RegistrationResult');
        // }
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

    const checkDuplicates = () => {
        // Placeholder: Replace this with your actual duplicate check logic
        console.log('Checking for duplicates:', username);
        Alert.alert('중복확인', '중복된 아이디가 없습니다.', [
            { text: '확인' }
        ]);
    };

    return (
        <ScrollView>
            <ScreenTitle title={title} />
            <View style={styles.container}>
                <View style={idTextValid ? styles.inputGroup1 : styles.inputGroup2} >
                    <TextInput
                        style={
                            styles.input
                        }
                        value={idText}
                        onChangeText={(text) => dispatch(setSignIdText(text))}
                        placeholder='아이디'
                        maxLength={15}
                        placeholderTextColor={'#9a9a9a'}
                    />
                    <TouchableOpacity style={styles.checkButton} onPress={checkDuplicates}>
                        <Text style={styles.checkButtonText}>중복 확인</Text>
                    </TouchableOpacity>
                </View>
                {!idTextValid && <Text style={styles.stepTitle}>아이디는 필수로 입력해야 합니다.</Text>}
                <View style={passwordTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={passwordText}
                        onChangeText={(text) => dispatch(setSignPasswordText(text))}
                        placeholder='비밀번호'
                        placeholderTextColor={'#9a9a9a'}
                        secureTextEntry={isSecurityEntry}
                        maxLength={15}
                    />
                </View>
                {!passwordTextValid && <Text style={styles.stepTitle}>비밀번호는 필수로 입력해야 합니다.</Text>}
                <View style={passwordCheckTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={passwordCheckText}
                        onChangeText={(text) => dispatch(setSignPasswordCheckText(text))}
                        placeholder='비밀번호 확인'
                        secureTextEntry={isSecurityEntry}
                        maxLength={15}
                        placeholderTextColor={'#9a9a9a'}
                    />
                    <View style={{ width:60, height:60, alignItems:'center', alignContent:'center', justifyContent:'center' }}>
                    {isSecurityEntry ? <Invisible onPress={ inVisiblePressHandler } /> : <Visible onPress={ visiblePressHandler } />}
                    </View>
                </View>
                {!passwordCheckTextValid && <Text style={styles.stepTitle}>비밀번호가 일치하지 않습니다. </Text>}
                <View style={nameTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={nameText}
                        onChangeText={(text) => dispatch(setSignNameText(text))}
                        placeholder='이름'
                        maxLength={15}
                        placeholderTextColor={'#9a9a9a'}
                    />
                </View>
                {!nameTextValid && <Text style={styles.stepTitle}>이름은 필수로 입력해야 합니다.</Text>}
                <View style={emailTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={emailText}
                        onChangeText={(text) => dispatch(setSignEmailText(text))}
                        placeholder='이메일'
                        maxLength={15}
                        placeholderTextColor={'#9a9a9a'}
                    />
                </View>
                {!emailTextValid && <Text style={styles.stepTitle}>이메일은 필수로 입력해야 합니다.</Text>}
                <View style={emailTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={phoneText}
                        onChangeText={(text) => dispatch(setSignPhoneText(text))}
                        placeholder='휴대폰 번호'
                        maxLength={15}
                        placeholderTextColor={'#9a9a9a'}
                    />
                </View>
                {!phoneTextValid && <Text style={styles.stepTitle}>전화번호는 필수로 입력해야 합니다.</Text>}
                <SignUpButton onPress={signUpPressHandler} />
            </View>
        </ScrollView>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    stepTitle: {
        fontSize: width * 0.035, // 동적으로 폰트 크기 조정
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputGroup: {
        flexDirection: 'row',
        width: width * 0.9, // 전체 너비의 90%
        height: height * 0.08, // 전체 높이의 7%
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },
    inputGroup1: {
        flexDirection: 'row',
        width: width * 0.9, // 전체 너비의 90%
        height: height * 0.08, // 전체 높이의 7%
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        margin: 10,
    },
    inputGroup2: {
        flexDirection: 'row',
        width: width * 0.9, // 전체 너비의 90%
        height: height * 0.08, // 전체 높이의 7%
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'red',
        margin: 10,
    },
    input: {
        flex: 1,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 15,
        marginRight: 10,
        borderWidth: 0,
    },
    checkButton: {
        backgroundColor: '#6F50F8',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 15,
    },
    checkButtonText: {
        color: 'white',
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#6F50F8',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default SignUp;