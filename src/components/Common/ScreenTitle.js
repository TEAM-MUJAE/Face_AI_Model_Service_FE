import React, { useState } from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import BackButton from '../../static/Svg/BackButton';



function ScreenTitle() {

    const [text, setText] = useState('');
    // const navigation = useNavigation();

    const backPressHandler = () => {
        console.log('back Button clicked!');
        // navigation.navigate('Home')
    }

    return (
        <View>
            <BackButton key="back" onPress={ backPressHandler } />
            <Text>닮은 연예인 찾기</Text>
        </View>
    );

}

export default ScreenTitle;