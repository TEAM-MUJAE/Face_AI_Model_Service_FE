import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView, Alert } from 'react-native';


import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';


import FirstInsertURL from './FirstInsertURL';
import { setIsFirstSelected, setSelectedFirstImage } from '../../features/compareSlice';
import BxTrash from '../../static/Svg/BxTrash';


function FirstInsertImage() {

    const initialFormImage = require('../../static/img/resource/uploadForm.png');
    const uploadFormImage = useSelector(state => state.compare.selectedFirstImage);
    const isFirstSelected = useSelector(state => state.compare.isFirstSelected);
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("동작순서 확인 1")
        console.log("첫번째 이미지 선택 컴포넌트 마운트 완료!")
        return () => {
            console.log("동작순서 확인 2")
            dispatch(setIsFirstSelected(false));
            dispatch(setSelectedFirstImage(initialFormImage));
            console.log("첫번째 이미지 선택 컴포넌트 언마운트 완료!")
        }
    }, [dispatch]);

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
        console.log("첫번째 이미지 선택 버튼 클릭됨!")

        launchImageLibrary({ mediaType: 'photo' }, (response) => {

            if (response.didCancel) {
                console.log('이미지 선택을 취소했거나 이미지가 없습니다!');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // 선택한 이미지 정보
                const selectedImage = response.assets[0];
                console.log("이미지 선택 완료!", response.assets[0])

                // 선택한 이미지 확장자 검사
                const fileExtension = selectedImage.fileName.split('.').pop().toLowerCase();
                console.log("fileExtension", fileExtension);

                if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png') {
                    console.log("이미지 확장자 검사 이상없음!");
                    // 디바이스 내 선택 이미지 반영
                    dispatch(setSelectedFirstImage(selectedImage));

                } else {
                    console.log("선택한 이미지 확장자가 jpg, jpeg, png 파일이 아님!");
                    Alert.alert('알림', '지원되지 않는 파일 형식입니다. 선택한 이미지가 jpg, jpeg, png 파일인지 확인이 필요합니다.',[
                        { text: '확인' }
                    ]);
                }
            }
        });   
    };

    const trashPressHandler = () => {
        dispatch(setIsFirstSelected(false));
        dispatch(setSelectedFirstImage(initialFormImage));
    }

    /* 이미지 정보가 잘못되엇을 경우 */
    const imageErrorHandler = () => {
        Alert.alert('알림', '이미지를 찾을 수 없습니다. url을 다시 확인해주세요.', [
            { text: '확인', onPress: () => {
                dispatch(setSelectedFirstImage(initialFormImage));
                dispatch(setIsFirstSelected(false));
            }}
        ]);
    };

    return (
        <ScrollView>
            <TouchableOpacity onPress={ imageUploadHandler }>
                <Image 
                    key={uploadFormImage} 
                    source={ renderImageSource(uploadFormImage) } 
                    style={styles.image}
                    onError={imageErrorHandler}
                />
            </TouchableOpacity>
            {isFirstSelected && <BxTrash onPress={ trashPressHandler } />}
            {/* <FirstInsertURL /> */}
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

export default FirstInsertImage;