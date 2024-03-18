import React, { useState } from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import BackButton from '../../static/Svg/BackButton';
import { useSelector } from 'react-redux';



function ScreenTitle() {

    const screenTitle = useSelector(state => state.title.changedTitleText);

    const navigation = useNavigation();

    const backPressHandler = () => {
        console.log('back Button clicked!');
        navigation.goBack();
    }

    return (
        <View>
            <BackButton key="back" onPress={ backPressHandler } />
            <Text>{`${ screenTitle }`}</Text>
        </View>
    );

}

export default ScreenTitle;