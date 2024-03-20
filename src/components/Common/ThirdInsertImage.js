import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';


import ThirdInsertURL from './ThirdInsertURL';
import { setIsThirdSelected, setSelectedImage } from '../../features/thirdCompareSlice';
import BxTrash from '../../static/Svg/BxTrash';


function ThirdInsertImage() {

    const initialFormImage = require('../../static/img/resource/uploadForm.png');
    const uploadFormImage = useSelector(state => state.thirdCompare.selectedImage); // initialFormImage와 같음 
    const isThirdSelected = useSelector(state => state.thirdCompare.isThirdSelected); // false
 
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("동작순서 확인 1")
        console.log("세번째 이미지 선택 컴포넌트 마운트 완료!")
        return () => {
            console.log("동작순서 확인 2")
            dispatch(setIsThirdSelected(false));
            dispatch(setSelectedImage(initialFormImage));
            console.log("세번째 이미지 선택 컴포넌트 언마운트 완료!")
        }
    }, []);

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
        console.log("세번째 이미지 선택 버튼 클릭됨!")

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
        dispatch(setIsThirdSelected(false));
        dispatch(setSelectedImage(initialFormImage));
    }
    
    return (
        <ScrollView>
            <TouchableOpacity onPress={ imageUploadHandler }>
                <Image key={ uploadFormImage } source={ renderImageSource(uploadFormImage) } style={styles.image} />
            </TouchableOpacity>
            {isThirdSelected && <BxTrash onPress={ trashPressHandler } />}
            {/* <ThirdInsertURL /> */}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
    }
});

export default ThirdInsertImage;