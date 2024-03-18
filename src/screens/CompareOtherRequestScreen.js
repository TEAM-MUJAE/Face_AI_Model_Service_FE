import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';



import Header from '../components/Common/Header';
import CompareOtherRequest from '../components/CompareOther/CompareOtherRequest';

function CompareOtherRequestScreen() {

    useEffect(() => {
        return () => {}
    }
    , []);

    return (
        <ScrollView>
            <Header />
            <CompareOtherRequest />
        </ScrollView>
    );
}

export default CompareOtherRequestScreen;