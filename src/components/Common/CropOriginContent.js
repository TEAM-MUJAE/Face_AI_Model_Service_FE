import React from 'react';
import { View, Image, StyleSheet, Text,Dimensions } from 'react-native';


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
                    <Text style={styles.cropImageText}>기준 얼굴</Text>
                    <Image key={firstCropImage} source={{ uri: `data:image/jpg;base64,${firstCropImage}` }} style={styles.resultImage} />
                </View>
                <View style={[styles.bxSortLeft, styles.bxSortRotateRight]}>
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={[styles.resultThreeCropTriangle, styles.secondImage]}>
                    <Image key={secondCropImage} source={{ uri: `data:image/jpg;base64,${secondCropImage}` }} style={styles.resultImage} />
                    <Text style={styles.cropImageText}>첫번째 인물</Text>
                </View>
                <View style={[styles.bxSortRight, styles.bxSortRotateLeft]}>
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={[styles.resultThreeCropTriangle, styles.thirdImage]}>
                    <Image key={thirdCropImage} source={{ uri: `data:image/jpg;base64,${thirdCropImage}` }} style={styles.resultImage} />
                    <Text style={styles.cropImageText}>두번째 인물</Text>
                </View>
            </View>}
            <View style={styles.descriptionTextContainer}>
                <Text style={styles.descriptionText}>{`위의 사진들은 AI가 얼굴이라고 인식한 부분이에요`}</Text>
            </View>
        </View>
    );

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        // borderWidth: 1,
        // backgroundColor: 'blue',
    },
    resultContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    oneCropContainer: {
        // backgroundColor: 'blue',
        alignItems: 'center',
    },
    twoCropContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // 이미지 사이의 공간을 균등하게 배분
        width: '100%', // 컨테이너의 너비를 화면에 맞춤
        // backgroundColor: 'green',
    },
    threeCropContainer: {
        position: 'relative', // 부모를 relative로 설정
        height: height * 0.4, // 화면 높이의 40%를 사용
        width: '100%', // 삼각형 형태를 유지하기 위해 적절한 너비 설정
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'green',
    },
    resultThreeCropTriangle: {
        position: 'absolute', // 절대 위치 설정
        margin: -10,
        bottom: 0, // 아래쪽에 위치
        // backgroundColor: 'red',
    },
    firstImage: {
        top: '3%', // 첫 번째 이미지를 위로
        alignSelf: 'center',
        // backgroundColor: 'red',
    },
    secondImage: {
        bottom: '-10%', // 두 번째 이미지를 아래 왼쪽으로
        left: '3%', // 화면 너비의 10% 지점에 위치
    },
    thirdImage: {
        bottom: '-10%', // 세 번째 이미지를 아래 오른쪽으로
        right: '3%', // 화면 너비의 10% 지점에 위치
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
    descriptionTextContainer: {
        width: '100%',
        justifyContent: 'center', // Center align description
        borderRadius: 10,
        backgroundColor: '#6F50F8', // Light grey background for the description
        marginTop: 50,
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 15,
        color: '#FFF', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        justifyContent: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    // cropImageTextContainer: {
    //     width: '100%',
    //     height: height * 0.04,
    //     justifyContent: 'center',
    //     borderRadius: 10,
    //     backgroundColor: '#6F50F8',
    //     marginTop: 5,
    // },
    cropImageText: {
        fontSize: 15,
        color: '#6F50F8',
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
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
    resultTextContainer: {
        flex: 1,
        // justify/Content: 'center',
        // backgroundColor: 'green',
        // marginBottom: 20,
        marginTop: 50,
        alignItems: 'center',
        // borderWidth: 1,
    },
    resultText: {
        textAlign: 'center',
        fontSize: width * 0.04,
        // backgroundColor: 'puple',
    },
})

export default CropOriginContent;