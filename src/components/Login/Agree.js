import React, { useEffect } from 'react';
import {ScrollView, Dimensions, Text, View, StyleSheet } from 'react-native';


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
            title: '회원가입'
        });
    }

    return (
        <ScrollView>
            <ScreenTitle title={ title } />
            <View style={styles.container}>
            {!isCheckedFullAgree && <Text style={styles.stepTitle}>{`[필수] 항목에 모두 동의해야 다음 단계로 넘어갈 수 있습니다.`}</Text>}
            <View style={styles.checkAndTextContainer}>
                <CheckBox
                    value={ isCheckedTermsAgree }
                    onValueChange={ termsAgreeCheckHandler }
                />
                <Text style={styles.termsText}>{`[필수] 이용약관`}</Text>
            </View>
            <Terms />
            <View style={styles.checkAndTextContainer}>
                <CheckBox
                    value={ isCheckedPrivacyAgree }
                    onValueChange={ privacyAgreeCheckHandler }
                />
                <Text style={styles.termsText}>{`[필수] 개인정보 수집 및 이용`}</Text>
            </View>
            <UsePrivacy />
            <View style={styles.checkAllContainer}>
                <CheckBox
                    value={ isCheckedFullAgree }
                    onValueChange={ fullAgreeCheckHandler }
                />
                <Text style={styles.termsText}>전체 동의</Text>
            </View>
            {(isCheckedFullAgree && isCheckedTermsAgree && isCheckedPrivacyAgree) && <ActivateNextButton onPress={ activateNextPressHandler } />}
            </View>
        </ScrollView>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height: height,
        backgroundColor: 'white',
    },
    checkAndTextContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkAllContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    termsContainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    termsText: {
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
    },
    stepTitle: {
        fontSize: 13,
        color: 'red',
        textAlign: 'center', 
        fontWeight: 'bold',
        marginTop: 10,
      },
});

export default Agree;