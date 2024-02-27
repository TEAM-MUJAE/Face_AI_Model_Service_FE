import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, useWindowDimensions } from 'react-native';


import ImagePicker from 'react-native-image-picker';
import commonComponentStyles from './styles/commonComponentStyles';


const uploadFormImage = require("../../static/img/resource/uploadForm.png");

function InsertImage() {

    // const [imageUri, setImageUri] = useState(uploadFormImage);
    // const [imageUri, setImageUri] = useState(null);
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    // const launchCameraHandler = () => {
    //     ImagePicker.launchCamera(
    //         {
    //             mediaType: "photo",
    //             includeBase64: false,
    //         },
    //         (res) => {
    //             if (!res.didCancel) {
    //                 setImageUri(res.uri);
    //             }
    //         }
    //     );
    // };

    const launchImageLibraryHandler = () => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: "photo",
                includeBase64: false,
            },
            (res) => {
                if (!res.didCancel) {
                    setImageUri(res.uri);
                }
            }
        );
    };

    return (
        <View style={ commonComponentStyles.contentContainer }>
            {/* {imageUri && (
                <TouchableOpacity onPress={ launchImageLibraryHandler }>
                    <Image source={ uploadFormImage } width={ 100 } height={ 100 } />
                </TouchableOpacity>
            )} */}
            <TouchableOpacity onPress={ launchImageLibraryHandler }>
                <Image source={ uploadFormImage } width={ 100 } height={ 100 } />
            </TouchableOpacity>
        </View>
    );

}

export default InsertImage;