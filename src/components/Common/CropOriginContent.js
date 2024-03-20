import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


import { useSelector } from 'react-redux';


import BxSort from '../../static/Svg/BxSort';


function CropOriginContent() {

    const userCrop = useSelector(state => state.similarityData.cropped_file_paths);
    const firstCropImage = useSelector(state => state.similarityData.encoded_img1); // 첫번째 크롭 base64 문자열
    const secondCropImage = useSelector(state => state.similarityData.encoded_img2); // 두번째 크롭 base64 문자열
    const thirdCropImage = useSelector(state => state.similarityData.encoded_img3); // 세번째 크롭 base64 문자열
    

    /*  userCrop이 falsy 값이 아닐때만 셀럽 결과에서 이미지 base64 문자열을 가져옴 
        닮은 연예인 찾기(CompareCelebRequest) 기능에서 AI 서빙 패키지에 요청했을 경우에만
        userCrop이 falsy 값이 아님
    */
    let userCropImage = ''; 
    if (userCrop) {
        const reformattedCropImage = userCrop.map(([name, path]) => ({ name, path }));
        console.log("reformattedCropImage : ", reformattedCropImage);
        userCropImage = reformattedCropImage[0].path;
    }

    return (
        <View>
            <Text>AI가 얼굴을 분석할때 이미지의 이 부분을 사용했다고 하는군요!</Text>
            {userCropImage && <View style={styles.oneCropContainer}>
                <Image key={userCropImage} source={{ uri: `data:image/jpg;base64,${ userCropImage }` }} style={styles.resultImage} />
            </View>}
            {(firstCropImage && !thirdCropImage) && <View style={styles.twoCropContainer}>
                <View style={styles.resultImageContainer}>
                    <Image key={firstCropImage} source={{ uri: `data:image/jpg;base64,${ firstCropImage }` }} style={styles.resultImage} />
                </View>
                <View> 
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={styles.resultImageContainer}>
                    <Image key={secondCropImage} source={{ uri: `data:image/jpg;base64,${ secondCropImage }` }} style={styles.resultImage} />
                </View>
            </View>}
            {thirdCropImage && <View style={styles.threeCropContainer}>
                <View style={styles.resultImageContainer}>
                    <Image key={firstCropImage} source={{ uri: `data:image/jpg;base64,${ firstCropImage }` }} style={styles.resultImage} />
                </View>
                <View> 
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={styles.resultImageContainer}>
                    <Image key={secondCropImage} source={{ uri: `data:image/jpg;base64,${ secondCropImage }` }} style={styles.resultImage} />
                </View>
                <View> 
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={styles.resultImageContainer}>
                    <Image key={thirdCropImage} source={{ uri: `data:image/jpg;base64,${ thirdCropImage }` }} style={styles.resultImage} />
                </View>
            </View>}
        </View>
    );

}

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1
    },
    oneCropContainer: {
    },
    twoCropContainer: {
    },
    threeCropContainer: {
    },
    resultImageContainer: {
        flex: 1
    },
    resultImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    }
})

export default CropOriginContent;