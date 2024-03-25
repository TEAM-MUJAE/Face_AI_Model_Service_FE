import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import BackButton from '../../static/Svg/BackButton';
import { useDispatch } from 'react-redux';
import { setFirstImageUrl, setIsFirstSelected, setIsLoading, setIsSecondSelected, setIsThirdSelected, setSecondImageUrl, setSelectedFirstImage, setSelectedSecondImage, setSelectedThirdImage, setThirdImageUrl } from '../../features/compareSlice';


function ScreenTitle({ title }) {


    const initialFormImage = require('../../static/img/resource/uploadForm.png');


    console.log('title2', title);

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const backPressHandler = () => {
        console.log('back Button clicked!');
        dispatch(setSelectedFirstImage(initialFormImage));
        dispatch(setIsFirstSelected(false));
        dispatch(setSelectedSecondImage(initialFormImage));
        dispatch(setIsSecondSelected(false));
        dispatch(setSelectedThirdImage(initialFormImage));
        dispatch(setIsThirdSelected(false));
        dispatch(setFirstImageUrl(''));
        dispatch(setSecondImageUrl(''));
        dispatch(setThirdImageUrl(''));
        dispatch(setIsLoading(false));

        navigation.goBack();
    }

    return (

        <View style={styles.container}>
        <BackButton key="back" onPress={ backPressHandler } />
        <View style={styles.centerContainer}>
        <Text style={styles.title}>{`${ title }`}</Text>
        </View>
        {/* <View style={{flex: 1}}></View> */}
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
      borderBottomWidth: 1,
    },
    centerContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
      color: '#6F50F8',
      fontWeight: '900',
    },
  });

export default ScreenTitle;