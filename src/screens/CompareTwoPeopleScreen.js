import React, { useEffect } from 'react';
import { View } from 'react-native';



import Header from '../components/Common/Header';
import CompareTwoContent from '../components/CompareTwo/CompareTwoContent';

function CompareTwoPeopleScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <View>
            <Header />
            <CompareTwoContent />
        </View>
    );
}

export default CompareTwoPeopleScreen;