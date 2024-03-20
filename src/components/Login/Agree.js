import React from 'react';
import { TextInput, Text, View } from 'react-native';


import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';


import ScreenTitle from '../Common/ScreenTitle';
import { setIsCheckedFullAgree } from '../../features/signUpSlice';



function Agree() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const isCheckedFullAgree = useSelector(state => state.signup.isCheckedFullAgree);
    const isCheckedTermsAgree = useSelector(state => state.signup.isCheckedTermsAgree);
    const isCheckedPrivacyAgree = useSelector(state => state.signup.isCheckedPrivacyAgree);

    const title = route.params?.title ?? '로그인 컴포넌트에서 보낸 타이틀이 없습니다.';
    
    const fullAgreeCheckHandler = () => {
        console.log('FullAgree Check Box clicked!');
        dispatch(setIsCheckedFullAgree(!isCheckedFullAgree));
    }

    return (
        <View>
            <ScreenTitle title={ title } />
            <CheckBox
                value={ isCheckedFullAgree }
                onValueChange={ fullAgreeCheckHandler }
            />
            <Text>전체 동의하기</Text>

        </View>
    );
}

export default Agree;