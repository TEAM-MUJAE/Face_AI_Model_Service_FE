import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


import InsertURL from './InsertURL';
import ExploreButton from '../../static/Svg/ExploreButton';


function InsertImage() {

    const uploadFormImageUri = "../../static/img/resource/uploadForm.png"
    const uploadFormImage = require(uploadFormImageUri);
    console.log("확인", uploadFormImage)

    
    const [imageUri, setImageUri] = useState(uploadFormImageUri);
    const [image, setImage] = useState(uploadFormImage)

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

    // useEffect(() => {
    //     const changedImage = imageUri;
    //     setImage(changedImage)

    // }, [imageUri]);

    const launchImageLibraryHandler = () => {
        launchImageLibrary(
            {
                mediaType: "photo",
                includeBase64: false,
            },
            (res) => {
                if (!res.didCancel) {
                    console.log("왔냐? :", res)
                    setImageUri(res.assets[0].uri);
                    // console.log("safgagdsg? :", imageUri)
                }
                else {
                    console.log("안와!!?")
                }
            }
        );
    };


    const explorePressHandler = () => {
        console.log('Explore Button clicked!');
    }
    

    return (
        <View>
            {imageUri && (
                <TouchableOpacity onPress={ launchImageLibraryHandler }>
                    <Image source={ image } />
                </TouchableOpacity>
            )}
            {/* <TouchableOpacity onPress={ launchImageLibraryHandler }>
                <Image source={ uploadFormImage } width={ 100 } height={ 100 } />
            </TouchableOpacity> */}
            <InsertURL />
            <ExploreButton key="explore" onPress={ explorePressHandler } />
        </View>
    );

}

export default InsertImage;