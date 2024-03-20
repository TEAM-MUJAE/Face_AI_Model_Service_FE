import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import Agree from '../components/Login/Agree';


function AgreeScreen() {

    return (
        <ScrollView>
            <Header />
            <Agree />
        </ScrollView>
    );
}

export default AgreeScreen;