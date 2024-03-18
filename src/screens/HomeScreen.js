import React from 'react';
import { ScrollView } from 'react-native';


import Header from '../components/Common/Header';
import NavContent from '../components/MainHome/NavContent';


function HomeScreen() {


  
  return (
    <ScrollView>
      <Header />
      <NavContent />
    </ScrollView>
  );
}

export default HomeScreen;