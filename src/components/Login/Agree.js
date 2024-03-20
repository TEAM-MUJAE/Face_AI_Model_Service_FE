import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';


import ScreenTitle from '../Common/ScreenTitle';
import { setIsCheckedFullAgree, setIsCheckedPrivacyAgree, setIsCheckedTermsAgree } from '../../features/signUpSlice';
import Terms from './Terms';
import UsePrivacy from './UsePrivacy';
import ActivateNextButton from '../../static/Svg/ActivateNextButton';



function Agree() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const isCheckedFullAgree = useSelector(state => state.signup.isCheckedFullAgree);
    const isCheckedTermsAgree = useSelector(state => state.signup.isCheckedTermsAgree);
    const isCheckedPrivacyAgree = useSelector(state => state.signup.isCheckedPrivacyAgree);

    const title = route.params?.title ?? '로그인 컴포넌트에서 보낸 타이틀이 없습니다.';

    useEffect(() => {
        if (isCheckedTermsAgree && isCheckedPrivacyAgree) {
            console.log('모두 동의한 것으로 간주합니다.');
            dispatch(setIsCheckedFullAgree(true));
        } else {
            console.log('모두 동의하지 않은 것으로 간주합니다.');
            dispatch(setIsCheckedFullAgree(false));
        }
    }, [isCheckedTermsAgree, isCheckedPrivacyAgree, dispatch]);
    
    const fullAgreeCheckHandler = () => {
        console.log('FullAgree Check Box clicked!');
        dispatch(setIsCheckedFullAgree(!isCheckedFullAgree));
        dispatch(setIsCheckedTermsAgree(!isCheckedFullAgree));
        dispatch(setIsCheckedPrivacyAgree(!isCheckedFullAgree));
    }

    const termsAgreeCheckHandler = () => {
        console.log('TermsAgree Check Box clicked!');
        dispatch(setIsCheckedTermsAgree(!isCheckedTermsAgree));
    }

    const privacyAgreeCheckHandler = () => {
        console.log('PrivacyAgree Check Box clicked!');
        dispatch(setIsCheckedPrivacyAgree(!isCheckedPrivacyAgree));
    }

    const activateNextPressHandler = () => {
        console.log('Next Button clicked!');
        navigation.navigate('SignUp', {
            title: '회원가입-정보입력'
        });
    }

    return (
        <View>
            <ScreenTitle title={ title } />
            <View style={styles.checkAndTextContainer}>
                <CheckBox
                    value={ isCheckedFullAgree }
                    onValueChange={ fullAgreeCheckHandler }
                />
                <Text>전체 동의하기</Text>
            </View>
            <Text>이용 약관 및 개인정보 수집 / 이용 동의를 모두 포함합니다.</Text>
            <View style={styles.checkAndTextContainer}>
                <CheckBox
                    value={ isCheckedTermsAgree }
                    onValueChange={ termsAgreeCheckHandler }
                />
                <Text>{`[필수] 이용약관`}</Text>
            </View>
            <Terms />
            <View style={styles.checkAndTextContainer}>
                <CheckBox
                    value={ isCheckedPrivacyAgree }
                    onValueChange={ privacyAgreeCheckHandler }
                />
                <Text>{`[필수] 개인정보 수집 및 이용`}</Text>
            </View>
            <UsePrivacy />
            {!isCheckedFullAgree && <Text>{`[필수] 항목에 모두 동의해야 다음 단계로 넘어갈 수 있습니다.`}</Text>}
            {(isCheckedFullAgree && isCheckedTermsAgree && isCheckedPrivacyAgree) && <ActivateNextButton onPress={ activateNextPressHandler } />}
        </View>
    );
}

const styles = StyleSheet.create({
    checkAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    termsContainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        height: 150,
    },
    termsText: {
        fontSize: 12,
    },
});

export default Agree;