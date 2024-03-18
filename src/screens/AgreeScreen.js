import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Common/Header';
import Agree from '../components/Login/Agree';
import ScreenTitle from '../components/Common/ScreenTitle';


function AgreeScreen() {

    return (
        <ScrollView>
            <Header />
            <ScreenTitle />
            <Agree />
        </ScrollView>
    );
}

export default AgreeScreen;