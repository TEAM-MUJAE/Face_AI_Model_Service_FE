import React from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


import BackToLoginButton from '../../static/Svg/BackToLoginButton';


function RegistrationComplete() {

    const navigation = useNavigation();

    const registerMessage = useSelector(state => state.memberData.registerResponseMessage);
    console.log(registerMessage);

    const backPressHandler = () => {
        navigation.navigate('Login', {
            title: '로그인'
        });
    }

    return (
        <View>
        {registerMessage && <Text>{`${registerMessage}`}</Text>}
        <BackToLoginButton key="back" onPress={ backPressHandler } />
        </View>
    );
}

export default RegistrationComplete;