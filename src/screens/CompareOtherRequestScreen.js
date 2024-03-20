import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import CompareOtherRequest from '../components/CompareOther/CompareOtherRequest';


function CompareOtherRequestScreen() {


    return (
        <ScrollView>
            {/* <Header /> */}
            <CompareOtherRequest />
        </ScrollView>
    );
}

export default CompareOtherRequestScreen;