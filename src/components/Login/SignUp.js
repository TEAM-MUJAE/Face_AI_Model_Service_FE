import React from 'react';
import { TouchableOpacity, TextInput, Text, View, StyleSheet, ScrollView } from 'react-native';


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

    const checkDuplicates = () => {
        // Placeholder: Replace this with your actual duplicate check logic
        console.log('Checking for duplicates:', username);
        Alert.alert('중복확인', '중복된 아이디가 없습니다.');
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
                        onChangeText={(text) => dispatch(setIdText(text))}
                        placeholder='아이디'
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
                        onChangeText={(text) => dispatch(setPasswordText(text))}
                        placeholder='비밀번호'
                    />
                </View>
                {!passwordTextValid && <Text style={styles.stepTitle}>비밀번호는 필수로 입력해야 합니다.</Text>}
                <View style={passwordCheckTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={passwordCheckText}
                        onChangeText={(text) => dispatch(setPasswordCheckText(text))}
                        placeholder='비밀번호 확인'
                    />
                </View>
                {!passwordCheckTextValid && <Text style={styles.stepTitle}>비밀번호 확인은 필수로 입력해야 합니다.</Text>}
                <View style={nameTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={nameText}
                        onChangeText={(text) => dispatch(setNameText(text))}
                        placeholder='이름'
                    />
                </View>
                {!nameTextValid && <Text style={styles.stepTitle}>이름은 필수로 입력해야 합니다.</Text>}
                <View style={emailTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={emailText}
                        onChangeText={(text) => dispatch(setEmailText(text))}
                        placeholder='이메일'
                    />
                </View>
                {!emailTextValid && <Text style={styles.stepTitle}>이메일은 필수로 입력해야 합니다.</Text>}
                <View style={emailTextValid ? styles.inputGroup1 : styles.inputGroup2}>
                    <TextInput
                        style={styles.input}
                        value={phoneText}
                        onChangeText={(text) => dispatch(setPhoneText(text))}
                        placeholder='휴대폰 번호'
                    />
                </View>
                {!phoneTextValid && <Text style={styles.stepTitle}>전화번호는 필수로 입력해야 합니다.</Text>}
                <SignUpButton onPress={signUpPressHandler} />
            </View>
        </ScrollView>
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
    stepTitle: {
        fontSize: 13,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputGroup: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },
    inputGroup1: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        margin: 10,
    },
    inputGroup2: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        height: 65,
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
        marginTop: 10,
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