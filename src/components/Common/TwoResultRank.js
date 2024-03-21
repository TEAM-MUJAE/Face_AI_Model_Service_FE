import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';
import Eye from '../../static/img/resource/eye.png';
import Nose from '../../static/img/resource/nose.png';
import Mouth from '../../static/img/resource/mouth.png';


function TwoResultRank() {

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths);

    /* =============== 데이터 정렬 ================== */
    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);
    console.log("sortedTotalSimilarity : ", sortedTotalSimilarity)


    const keys = Object.keys(landmarkSift);

    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    const reformattedLandmarkSift = landmarkSift[keys[0]].map(([name, path]) => ({ name, path }));

    /* Redux Store에서 상태 가져오기 */
    const currentRankPath = useSelector(state => state.similarityRank.currentRankPath);
    const mostSimilarTotalScore = useSelector(state => state.similarityRank.mostSimilarTotalScore);
    const mostSimilarEyeScore = useSelector(state => state.similarityRank.mostSimilarEyeScore);
    const mostSimilarNoseScore = useSelector(state => state.similarityRank.mostSimilarNoseScore);
    const mostSimilarMouthScore = useSelector(state => state.similarityRank.mostSimilarMouthScore);
    console.log("mostSimilarEyeScore : ", mostSimilarEyeScore)
    console.log("mostSimilarNoseScore : ", mostSimilarNoseScore)
    console.log("mostSimilarMouthScore : ", mostSimilarMouthScore)

    /* 현재 순위 이미지 경로에서 파일 확장자 추출 */
    console.log("currentRankPath : ", currentRankPath)
    const filename = currentRankPath.split('/').pop();
    const fileExtension = filename.split('.').pop();
    console.log("fileExtension : ", fileExtension)

    return (
        <View style={styles.twoResultContainer}>
            <Text>{`전체 유사도 ${ mostSimilarTotalScore }`}</Text>
            <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ reformattedLandmarkSift[0].path }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Eye}/>
                    <Text style={styles.resultText}>{`눈 유사도 ${ Math.round( mostSimilarEyeScore ) }`}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Nose}/>
                    <Text style={styles.resultText}>{`코 유사도 ${ Math.round( mostSimilarNoseScore ) }`}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Mouth}/>
                    <Text style={styles.resultText}>{`입 유사도 ${ Math.round( mostSimilarMouthScore ) }`}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    twoResultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    siftResultContainer: {
        // backgroundColor: 'blue',
        margin: 10,
        padding: 10,
    },
    siftResultImageContainer: {
        // backgroundColor: 'red',
        width: 350, 
        height: 350, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    siftResultImage: {
        backgroundColor: 'brown',
        width: 350,
        height: 350,
        // resizeMode: 'contain'
        // backgroundColor: 'red',
    },
    resultTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'purple',
    },
    resultText: {
        textAlign: 'center',
        color: '#6F50F8',
        fontWeight: 'bold',
        // backgroundColor: 'purple',
    },
    ImageSize: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        // backgroundColor: 'green'
    },
    inputGroup: {
        flexDirection: 'row',
        width: '100%',
        // borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
})

export default TwoResultRank;