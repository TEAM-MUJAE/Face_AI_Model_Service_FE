import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';


import { setIsCheckedFullAgree } from '../../features/signUpSlice';


function Agree() {

    const isCheckedFullAgree = useSelector(state => state.signup.isCheckedFullAgree);
    const isCheckedTermsAgree = useSelector(state => state.signup.isCheckedTermsAgree);
    const isCheckedPrivacyAgree = useSelector(state => state.signup.isCheckedPrivacyAgree);


    const navigation = useNavigation();
    const dispatch = useDispatch();

    
    const fullAgreeCheckHandler = () => {
        console.log('FullAgree Check Box clicked!');
        dispatch(setIsCheckedFullAgree(!isCheckedFullAgree));
    }


    return (
        <View>
            <CheckBox
                value={ isCheckedFullAgree }
                onValueChange={ fullAgreeCheckHandler }
            />
            <Text>전체 동의하기</Text>

        </View>
    );
}

export default Agree;