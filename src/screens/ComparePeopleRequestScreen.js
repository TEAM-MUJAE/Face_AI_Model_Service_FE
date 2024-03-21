import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import ComparePeopleRequest from '../components/ComparePeople/ComparePeopleRequest';


function ComparePeopleRequestScreen() {


    return (
        <ScrollView>
            {/* <Header /> */}
            <ComparePeopleRequest />
        </ScrollView>
    );
}

export default ComparePeopleRequestScreen;