import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import ComparePeopleResponse from '../components/ComparePeople/ComparePeopleResponse';


function ComparePeopleResponseScreen() {

   
    return (
        <ScrollView>
            <Header />
            <ComparePeopleResponse />
        </ScrollView>
    );
}

export default ComparePeopleResponseScreen;