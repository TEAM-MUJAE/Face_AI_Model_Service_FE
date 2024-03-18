import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';



import Header from '../components/Common/Header';
import CompareCelebRequest from '../components/CompareCeleb/CompareCelebRequest';

function CompareCelebRequestScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <ScrollView>
            <Header />
            <CompareCelebRequest />
        </ScrollView>
    );
}

export default CompareCelebRequestScreen;