import React, { useEffect } from 'react';
import { View } from 'react-native';



import Header from '../components/Common/Header';
import CompareCelebContent from '../components/CompareCeleb/CompareCelebContent';

function CompareCelebScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <View>
            <Header />
            <CompareCelebContent />
        </View>
    );
}

export default CompareCelebScreen;