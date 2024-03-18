import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


import { useSelector } from 'react-redux';


import BxSort from '../../static/Svg/BxSort';


function CropOriginContent() {

    const userCrop = useSelector(state => state.similarityData.cropped_file_paths);
    const firstCropImage = useSelector(state => state.similarityData.encoded_img1);
    const secondCropImage = useSelector(state => state.similarityData.encoded_img2);
    

    let userCropImage = '';
    if (userCrop) {
        const reformattedCropImage = userCrop.map(([name, path]) => ({ name, path }));
        console.log("reformattedCropImage : ", reformattedCropImage);
        userCropImage = reformattedCropImage[0].path;
    }

    return (
        <View>
            <Text>AI가 얼굴을 분석할때 이미지의 이 부분을 사용했다고 하는군요!3333333</Text>
            {userCropImage && <View style={styles.oneCropContainer}>
                <Image key={userCropImage} source={{ uri: `data:image/jpg;base64,${ userCropImage }` }} style={styles.resultImage} />
            </View>}
            {firstCropImage && <View style={styles.twoCropContainer}>
                <View style={styles.resultImageContainer}>
                    <Image key={firstCropImage} source={{ uri: `data:image/jpg;base64,${ firstCropImage }` }} style={styles.resultImage} />
                </View>
                <View style={styles.bxSortSvg}> 
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={styles.resultImageContainer}>
                    <Image key={secondCropImage} source={{ uri: `data:image/jpg;base64,${ secondCropImage }` }} style={styles.resultImage} />
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16
    },
    twoCropContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 16,
        marginHorizontal: 48
    },
    resultImageContainer: {
        flex: 1
    },
    resultImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    bxSortSvg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default CropOriginContent;