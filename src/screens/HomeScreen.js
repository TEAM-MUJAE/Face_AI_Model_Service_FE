import React from 'react';
import { View } from 'react-native';


import Header from '../components/Common/Header';
import NavContent from '../components/MainHome/NavContent';


function HomeScreen() {
  
  return (
    <View>
      <Header />
      <NavContent />
    </View>
  );
}

export default HomeScreen;