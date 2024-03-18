import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';



import Header from '../components/Common/Header';
import CompareCelebResponse from '../components/CompareCeleb/CompareCelebResponse';

function CompareCelebResponseScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <ScrollView>
            <Header />
            <CompareCelebResponse />
        </ScrollView>
    );
}

export default CompareCelebResponseScreen;