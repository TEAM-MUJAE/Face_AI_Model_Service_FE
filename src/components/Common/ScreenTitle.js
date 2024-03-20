import React, { useState } from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import BackButton from '../../static/Svg/BackButton';


function ScreenTitle({ title }) {


    const navigation = useNavigation();

    const backPressHandler = () => {
        console.log('back Button clicked!');
        navigation.goBack();
    }

    return (
        <View>
            <BackButton key="back" onPress={ backPressHandler } />
            <Text>{`${ title }`}</Text>
        </View>
    );

}

export default ScreenTitle;