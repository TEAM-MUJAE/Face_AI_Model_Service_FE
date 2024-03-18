import React, { useState } from 'react';
import { View, TextInput } from 'react-native';


function FirstInsertURL() {

    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                onChangeText={ setText }
                value={ text }
                placeholder='혹은 이미지 URL을 입력해주세요..'
            />
        </View>
    );

}

export default FirstInsertURL;