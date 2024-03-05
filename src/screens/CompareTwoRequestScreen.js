import React, { useEffect } from 'react';
import { View } from 'react-native';



import Header from '../components/Common/Header';
import CompareTwoRequest from '../components/CompareTwo/CompareTwoRequest';

function CompareTwoRequestScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <View>
            <Header />
            <CompareTwoRequest />
        </View>
    );
}

export default CompareTwoRequestScreen;