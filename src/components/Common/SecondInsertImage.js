import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';


import SecondInsertURL from './SecondInsertURL';
import { setIsSecondSelected, setSelectedImage } from '../../features/secondCompareSlice';
import BxTrash from '../../static/Svg/BxTrash';


function SecondInsertImage() {

    const initialFormImage = require('../../static/img/resource/uploadForm.png');
    const uploadFormImage = useSelector(state => state.secondCompare.selectedImage)
    const isSecondSelected = useSelector(state => state.secondCompare.isSecondSelected);

    const dispatch = useDispatch();

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

    const imageUploadHandler = () => {
        console.log("두번째 이미지 선택 버튼 클릭됨!")

        launchImageLibrary({ mediaType: "photo" },(response) => {

            if (response.didCancel) {
                console.log('이미지 선택을 취소했거나 이미지가 없습니다!');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log("이미지 선택 완료!", response.assets[0])

                // 선택한 이미지 정보
                const selectedImage = response.assets[0];

                // 디바이스 내 선택 이미지 반영
                dispatch(setSelectedImage(selectedImage));
            }
        });
    };

    const trashPressHandler = () => {
        dispatch(setIsSecondSelected(false));
        dispatch(setSelectedImage(initialFormImage));
    }
    
    return (
        <ScrollView>
            <TouchableOpacity onPress={ imageUploadHandler }>
                <Image key={uploadFormImage} source={ renderImageSource(uploadFormImage) } style={styles.image} />
            </TouchableOpacity>
            {isSecondSelected && <BxTrash onPress={ trashPressHandler } />}
            {/* <SecondInsertURL /> */}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    }
});

export default SecondInsertImage;