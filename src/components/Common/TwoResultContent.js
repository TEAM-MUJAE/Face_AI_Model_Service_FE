import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BxSort from '../../static/Svg/BxSort';


function TwoResultContent() {

    const [totalSimilarity, setTotalSimilarity] = useState(0)
    const [eyeSimilarity, setEyeSimilarity] = useState(0)
    const [noseSimilarity, setNoseSimilarity] = useState(0)
    const [earSimilarity, setEarSimilarity] = useState(0)

    return (
        <View>
            <View style={styles.resultContainer}>
                <View style={styles.resultImageContainer}>
                    <Image source={require('../../static/img/resource/userImage.png')} style={styles.resultImage} />
                </View>
                <View style={styles.bxSortSvg}> 
                    <BxSort width={50} height={50} viewBox="0 0 50 50" />
                </View>
                <View style={styles.resultImageContainer}>
                    <Image source={require('../../static/img/resource/croppedImage.png')} style={styles.resultImage} />
                </View>
            </View>
            <Text>{`전체 유사도 ${totalSimilarity}`}</Text>
            <View style={styles.resultOverlayContainer}>
                <View style={styles.resultOverlayImageContainer}>
                    <Image source={require('../../static/img/resource/compareImage.png')} style={styles.resultOverlayImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    <Text style={styles.resultText}>{`눈 유사도 ${eyeSimilarity}`}</Text>
                    <Text style={styles.resultText}>{`코 유사도 ${noseSimilarity}`}</Text>
                    <Text style={styles.resultText}>{`입 유사도 ${earSimilarity}`}</Text>
                </View>
                <View style={styles.resultOverlayImageContainer}>
                    <Image source={require('../../static/img/resource/contrastImage.png')} style={styles.resultOverlayImage} />
                </View>
            </View>
            <Text> 눈, 코, 입에 대한 유사도 수치를 선택하면</Text>
            <Text>선택한 특징을 기준으로 순위를 다시 볼 수 있어요!</Text>
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

    },
    resultOverlayContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 16
    },
    resultOverlayImageContainer: {
        flex: 1
    },
    resultOverlayImage: {
        width: 120,
        height: 120,
        resizeMode: 'cover'
    },
    resultTextContainer: {
        flex: 1
    },
    resultText: {
        textAlign: 'center',
        marginBottom: 8
    }
})

export default TwoResultContent;