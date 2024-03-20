import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import BackButton from '../../static/Svg/BackButton';


function ScreenTitle({ title }) {


    console.log('title2', title);

    const navigation = useNavigation();

    const backPressHandler = () => {
        console.log('back Button clicked!');
        navigation.goBack();
    }

    return (

        <View style={styles.container}>
        <BackButton key="back" onPress={ backPressHandler } />
        <View style={styles.centerContainer}>
        <Text style={styles.title}>{`${ title }`}</Text>
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#ffffff',
    },
    centerContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 50,
      height: 50,
    },
    title: {
      fontSize: 20,
      color: '#6F50F8',
      fontWeight: 'bold',
    },
  });

export default ScreenTitle;