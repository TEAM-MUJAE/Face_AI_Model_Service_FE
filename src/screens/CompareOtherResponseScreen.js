import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';



import Header from '../components/Common/Header';
import CompareOtherResponse from '../components/CompareOther/CompareOtherResponse';

function CompareOtherResponseScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <ScrollView>
            <Header />
            <CompareOtherResponse />
        </ScrollView>
    );
}

export default CompareOtherResponseScreen;