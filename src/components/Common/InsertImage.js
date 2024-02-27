import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';


import ImagePicker from 'react-native-image-picker';


function InsertImage() {

    const imagePressHandler = () => {
        handleImagePick();
    }

    return (
        <View>
            <TouchableOpacity onPress={imagePressHandler}>

            </TouchableOpacity>
        </View>
      );

}

export default HomeScreen;