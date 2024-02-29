import React, { useState } from 'react';
import { Text, View } from 'react-native';


import BackButton from '../../static/Svg/BackButton';


function ScreenTitle() {

    const [text, setText] = useState('');

    const backPressHandler = () => {
        console.log('back Button clicked!');
    }

    return (
        <View>
            <BackButton key="back" onPress={ backPressHandler } />
            <Text>닮은 연예인 찾기</Text>
        </View>
    );

}

export default ScreenTitle;