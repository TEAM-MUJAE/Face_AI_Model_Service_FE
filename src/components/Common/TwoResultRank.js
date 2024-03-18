import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';


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
                    <Text style={styles.resultText}>{`눈 유사도 ${ Math.round( mostSimilarEyeScore ) }`}</Text>
                    <Text style={styles.resultText}>{`코 유사도 ${ Math.round( mostSimilarNoseScore ) }`}</Text>
                    <Text style={styles.resultText}>{`입 유사도 ${ Math.round( mostSimilarMouthScore ) }`}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    twoResultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    siftResultContainer: {
    },
    siftResultImageContainer: {
        flex: 1
    },
    siftResultImage: {
        width: 350,
        height: 350,
        resizeMode: 'contain'
    },
    resultTextContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    resultText: {
        textAlign: 'center'
    }
})

export default TwoResultRank;