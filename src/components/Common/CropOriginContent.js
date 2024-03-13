import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';


import BxSort from '../../static/Svg/BxSort';
import { setSelectedImage } from '../../features/firstCompareSlice';



function CropOriginContent() {

    const mostSimilarCelebImage = useSelector(state => state.similarityImage.mostSimilarImage);

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

    return (
        <View style={styles.resultContainer}>
            <View style={styles.resultImageContainer}>
                <Image source={require('../../static/img/resource/userImage.png')} style={styles.resultImage} />
            </View>
            <View style={styles.bxSortSvg}> 
                <BxSort width={50} height={50} viewBox="0 0 50 50" />
            </View>
            <View style={styles.resultImageContainer}>
                <Image key={mostSimilarCelebImage} source={ renderImageSource(mostSimilarCelebImage) } style={styles.resultImage} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    resultContainer: {
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