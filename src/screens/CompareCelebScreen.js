import React, { useEffect } from 'react';
import { View } from 'react-native';


import screenStyles from './styles/screenStyles';
import Header from '../components/Layout/Header';
import CompareCelebContent from '../components/Layout/CompareCelebContent';

function CompareCelebScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <View style={ screenStyles.container }>
            <Header />
            <CompareCelebContent />
        </View>
    );
}

export default CompareCelebScreen;