import React, { useEffect } from 'react';
import { View } from 'react-native';



import Header from '../components/Common/Header';
import CompareCelebRequest from '../components/CompareCeleb/CompareCelebRequest';

function CompareCelebRequestScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <View>
            <Header />
            <CompareCelebRequest />
        </View>
    );
}

export default CompareCelebRequestScreen;