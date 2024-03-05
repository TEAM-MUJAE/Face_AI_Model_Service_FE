import React, { useEffect } from 'react';
import { View } from 'react-native';



import Header from '../components/Common/Header';
import CompareCelebResponse from '../components/CompareCeleb/CompareCelebResponse';

function CompareCelebResponseScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <View>
            <Header />
            <CompareCelebResponse />
        </View>
    );
}

export default CompareCelebResponseScreen;