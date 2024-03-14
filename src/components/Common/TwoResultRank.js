import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';


function TwoResultRank() {

    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths);

    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);
    console.log("sortedTotalSimilarity : ", sortedTotalSimilarity)


    const keys = Object.keys(landmarkSift);
    console.log("keys : ", keys[0])
    console.log("landmarkSift : ", landmarkSift[keys[0]])



    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    const reformattedLandmarkSift = landmarkSift[keys[0]].map(([name, path]) => ({ name, path }));
    console.log("reformattedLandmarkSift : ", reformattedLandmarkSift)

    /* Redux Store에서 상태 가져오기 */
    const currentRankPath = useSelector(state => state.similarityRank.currentRankPath);
    const mostSimilarTotalScore = useSelector(state => state.similarityRank.mostSimilarTotalScore);
    const mostSimilarEyeScore = useSelector(state => state.similarityRank.mostSimilarEyeScore);
    const mostSimilarNoseScore = useSelector(state => state.similarityRank.mostSimilarNoseScore);
    const mostSimilarMouthScore = useSelector(state => state.similarityRank.mostSimilarMouthScore);


    /* 현재 순위 이미지 경로에서 파일 확장자 추출 */
    console.log("currentRankPath : ", currentRankPath)
    const filename = currentRankPath.split('/').pop();
    const fileExtension = filename.split('.').pop();
    console.log("fileExtension : ", fileExtension)

    return (
        <View>
            <Text>{`전체 유사도 ${ mostSimilarTotalScore }`}</Text>
            <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ reformattedLandmarkSift[0].path }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    <Text>{`눈 유사도 ${ Math.round(mostSimilarEyeScore) }`}</Text>
                    <Text>{`코 유사도 ${ Math.round(mostSimilarNoseScore) }`}</Text>
                    <Text>{`입 유사도 ${ Math.round(mostSimilarMouthScore) }`}</Text>
                </View>
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

    },
    siftResultContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 16
    },
    siftResultImageContainer: {
        flex: 1
    },
    siftResultImage: {
        height: 150,
        resizeMode: 'contain'
    },
    resultTextContainer: {
        flex: 1
    },
    resultText: {
        textAlign: 'center',
        marginBottom: 8
    }
})

export default TwoResultRank;