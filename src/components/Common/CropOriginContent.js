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
        <View style={styles.container}>
            {userCropImage && <View style={styles.oneCropContainer}>
                <Image key={userCropImage} source={{ uri: `data:image/jpg;base64,${userCropImage}` }} style={styles.resultImage} />
            </View>}
            {(firstCropImage && !thirdCropImage) && <View style={styles.twoCropContainer}>
                <View style={styles.resultImageContainer}>
                    <Image key={firstCropImage} source={{ uri: `data:image/jpg;base64,${firstCropImage}` }} style={styles.resultImage} />
                </View>
                <View>
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={styles.resultImageContainer}>
                    <Image key={secondCropImage} source={{ uri: `data:image/jpg;base64,${secondCropImage}` }} style={styles.resultImage} />
                </View>
            </View>}
            {thirdCropImage && <View style={styles.threeCropContainer}>
                <View style={[styles.resultThreeCropTriangle, styles.firstImage]}>
                    <Image key={firstCropImage} source={{ uri: `data:image/jpg;base64,${firstCropImage}` }} style={styles.resultImage} />
                </View>
                <View style={[styles.bxSortLeft, styles.bxSortRotateRight]}>
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={[styles.resultThreeCropTriangle, styles.secondImage]}>
                    <Image key={secondCropImage} source={{ uri: `data:image/jpg;base64,${secondCropImage}` }} style={styles.resultImage} />
                </View>
                <View style={[styles.bxSortRight, styles.bxSortRotateLeft]}>
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={[styles.resultThreeCropTriangle, styles.thirdImage]}>
                    <Image key={thirdCropImage} source={{ uri: `data:image/jpg;base64,${thirdCropImage}` }} style={styles.resultImage} />
                </View>
            </View>}
            <Text style={styles.descriptionText}>AI가 얼굴을 분석할때 이 부분을 사용했다고 하는군요!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    resultContainer: {
        flex: 1,
        // backgroundColor: 'red',
    },
    oneCropContainer: {
        // backgroundColor: 'blue',
        alignItems: 'center',
    },
    twoCropContainer: {
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    threeCropContainer: {
        position: 'relative', // 부모를 relative로 설정
        height: 300, // 삼각형 형태를 유지하기 위해 적절한 높이 설정
        width: '100%', // 삼각형 형태를 유지하기 위해 적절한 너비 설정
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultThreeCropTriangle: {
        position: 'absolute', // 절대 위치 설정
        margin: -10,
        bottom: 0, // 아래쪽에 위치
    },
    firstImage: {
        top: 0, // 첫 번째 이미지를 위로
        alignSelf: 'center',
        // backgroundColor: 'red',
    },
    secondImage: {
        bottom: 0, // 두 번째 이미지를 아래 왼쪽으로
        left: 0,
    },
    thirdImage: {
        bottom: 0, // 세 번째 이미지를 아래 오른쪽으로
        right: 0,
    },
    resultImageContainer: {
        flex: 1,
        // backgroundColor: 'red',
    },
    resultImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        // backgroundColor: 'brown',
    },
    descriptionText: {
        fontSize: 15,
        color: '#6F50F8', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        // backgroundColor: 'red',
    },
    bxSortLeft: {
        position: 'absolute',
        left: 50, // Adjust this value based on your layout needs
        top: '40%', // Centers vertically in relation to the first image
        transform: [{ translateY: -25 }], // Adjusts the icon to be centered based on its height
        zIndex: 1,
    },
    bxSortRight: {
        position: 'absolute',
        right: 50, // Adjust this value based on your layout needs
        top: '40%', // Centers vertically in relation to the first image
        transform: [{ translateY: -25 }], // Adjusts the icon to be centered based on its height
        zIndex: 1,
    },
    bxSortRotateRight: {
        transform: [{ rotate: '-45deg' }], // Rotates the icon to point towards the second image
    },
    bxSortRotateLeft: {
        transform: [{ rotate: '45deg' }], // Rotates the icon to point towards the third image
    },
})

export default CropOriginContent;