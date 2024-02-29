import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import RNFS from 'react-native-fs'


import InsertURL from './InsertURL';
import ExploreButton from '../../static/Svg/ExploreButton';
import { setSelectedImage } from '../../features/compareCelebSlice';



function InsertImage() {

    const uploadFormImage = useSelector(state => state.compareCeleb.selectedImage)
    // const uploadFormImage = File('file:///data/user/0/com.face_ai_model_service_fe/cache/rn_image_picker_lib_temp_bec45f53-0f31-48dd-9bc1-c537fc643d34.webp')

    
    // const filePath = 'file:///data/user/0/com.face_ai_model_service_fe/cache/rn_image_picker_lib_temp_bec45f53-0f31-48dd-9bc1-c537fc643d34.webp'
    // const fileName = RNFS.readDir(filePath, 'base64')
    // console.log("너 뭔데", fileName._i)
    //     .then((result) => {
    //     console.log(result);
    //     }).catch((err) => {
    //     console.log(err.message, err.code);
    // });



    
    const dispatch = useDispatch();

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

    const renderImageSource = (imageSource) => {
        if (typeof imageSource === 'string') {
            console.log("동작순서 확인 3")
            console.log("어디로 오니 스트링", imageSource)
            return { uri: imageSource }
        }
        console.log("동작순서 확인 3")
        console.log("어디로 오니 숫자", imageSource)
        return imageSource
    };

    // const renderImageSource = () => {
    //     if(uploadFormImage.type === 'uri') {
    //         return { uri: uploadFormImage.uri };
    //     } 
    //     return uploadFormImage.uri;
    // };

    const imageUploadHandler = () => {
        console.log("동작순서 확인 1")
        launchImageLibrary(
            {
                mediaType: "photo",
                includeBase64: false,
            },
            (res) => {
                if (res.didCancel || !res.assets) {
                    console.log("동작순서 확인 2")
                    console.log("이미지 선택을 취소했거나 이미지가 없습니다!")
                }
                else {
                    const newImageUri = res.assets[0].uri;
                    console.log("동작순서 확인 2")
                    console.log("왔니?", newImageUri)
                    // dispatch(setSelectedImage({ uri: newImageUri, type: 'uri' }));
                    dispatch(setSelectedImage(newImageUri));
                }
            }
        );
    };


    const explorePressHandler = () => {
        console.log('Explore Button clicked!');
    }
    
    return (
        <View>
            <TouchableOpacity onPress={ imageUploadHandler }>
                <Image key={uploadFormImage} source={ renderImageSource(uploadFormImage) } />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={ imageUploadHandler }>
                <Image key={uploadFormImage.uri} source={ renderImageSource() } />
            </TouchableOpacity> */}
            <InsertURL />
            <ExploreButton key="explore" onPress={ explorePressHandler } />
        </View>
    );

}

export default InsertImage;