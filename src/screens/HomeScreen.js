import React from 'react';
import { View } from 'react-native';


import screenStyles from './styles/screenStyles';
import Header from '../components/Layout/Header';
import NavContent from '../components/Layout/NavContent';


function HomeScreen() {
  
  return (
    <View style={ screenStyles.container }>
      <Header />
      <NavContent />
    </View>
  );
}

export default HomeScreen;