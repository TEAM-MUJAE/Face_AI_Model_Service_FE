import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import CropOriginContent from './CropOriginContent';


function TwoResultContent() {

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarity.total_similar_faces);
    const leftEyeSimilarity = useSelector(state => state.similarity.left_eyes_socore_distances);
    const rightEyeSimilarity = useSelector(state => state.similarity.right_eyes_socore_distances);
    const noseSimilarity = useSelector(state => state.similarity.nose_socore_distances);
    const mouthSimilarity = useSelector(state => state.similarity.mouth_socore_distances);
    
    /* =============== 데이터 정렬 ================== */

    /* totalSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);
    console.log("sortedTotalSimilarity : ", sortedTotalSimilarity)

    /* eyeSimilarity 데이터를 score를 평균낸 후 기준으로 정렬 */
    const combinedSimilarity = {};
    [...leftEyeSimilarity].forEach(([path, leftScore]) => {
        if (!combinedSimilarity[path]) combinedSimilarity[path] = { leftScore, rightScore: 0, count: 0 };
    });
    [...rightEyeSimilarity].forEach(([path, rightScore]) => {
        if (combinedSimilarity[path]) {
            combinedSimilarity[path].rightScore = rightScore;
            combinedSimilarity[path].count = 1; // 경로가 같은 경우 count를 1로 설정
        }
    });
    const averageEyeSimilarity = Object.entries(combinedSimilarity).map(([path, { leftScore, rightScore, count }]) => {
        if (count === 0) return [path, leftScore];
        return [path, (leftScore + rightScore) / 2];
    });
    // const sortedEyeSimilarity = averageEyeSimilarity.sort((a, b) => a[1] - b[1]);

    /* noseSimilarity 데이터를 score를 기준으로 정렬 */
    // const sortedNoseSimilarity = [...noseSimilarity].sort((a, b) => a[1] - b[1]);

    /* mouthSimilarity 데이터를 score를 기준으로 정렬 */
    // const sortedMouthSimilarity = [...mouthSimilarity].sort((a, b) => a[1] - b[1]);

    /* =============================================== */

    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedTotalSimilarity : ", reformattedTotalSimilarity)
    const reformattedEyeSimilarity = averageEyeSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedEyeSimilarity : ", reformattedEyeSimilarity)
    const reformattedNoseSimilarity = noseSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedNoseSimilarity : ", reformattedNoseSimilarity)
    const reformattedMouthSimilarity = mouthSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedMouthSimilarity : ", reformattedMouthSimilarity)
    

    const mostSimilarCelebPath = reformattedTotalSimilarity[0].path; // 가장 유사한 사진의 경로
    const mostSimilarTotalScore = reformattedTotalSimilarity[0].score; // 가장 유사한 사진의 전체 유사도

    const mostSimilarEyeScoreObj = reformattedEyeSimilarity.find(obj => obj.path === mostSimilarCelebPath);
    const mostSimilarEyeScore = mostSimilarEyeScoreObj ? mostSimilarEyeScoreObj.score : 0; // 가장 유사한 사진의 눈 유사도

    const mostSimilarNoseScoreObj = reformattedNoseSimilarity.find(obj => obj.path === mostSimilarCelebPath);
    const mostSimilarNoseScore = mostSimilarNoseScoreObj ? mostSimilarNoseScoreObj.score : 0; // 가장 유사한 사진의 코 유사도
    
    const mostSimilarMouthScoreObj = reformattedMouthSimilarity.find(obj => obj.path === mostSimilarCelebPath);
    const mostSimilarMouthScore = mostSimilarMouthScoreObj ? mostSimilarMouthScoreObj.score : 0; // 가장 유사한 사진의 입 유사도


    // const mostSimilarEyeScore = eyeSimilarity.find(([path, score]) => path === mostSimilarCelebPath)[1]; // 가장 유사한 사진의 눈 유사도
    // const mostSimilarNoseScore = noseSimilarity.find(([path, score]) => path === mostSimilarCelebPath)[1]; // 가장 유사한 사진의 코 유사도
    // const mostSimilarMouthScore = mouthSimilarity.find(([path, score]) => path === mostSimilarCelebPath)[1]; // 가장 유사한 사진의 입 유사도


    // const reformattedEyeSimilarity = sortedEyeSimilarity.map(([path, score]) => ({ path, score }));
    // console.log("reformattedEyeSimilarity : ", reformattedEyeSimilarity)
    // const reformattedNoseSimilarity = sortedNoseSimilarity.map(([path, score]) => ({ path, score }));
    // console.log("reformattedNoseSimilarity : ", reformattedNoseSimilarity)
    // const reformattedMouthSimilarity = sortedMouthSimilarity.map(([path, score]) => ({ path, score }));
    // console.log("reformattedMouthSimilarity : ", reformattedMouthSimilarity)


  

    return (
        <View>
            <CropOriginContent />
            <Text>{`전체 유사도 ${ mostSimilarTotalScore }`}</Text>
            <View style={styles.resultOverlayContainer}>
                <View style={styles.resultOverlayImageContainer}>
                    <Image source={require('../../static/img/resource/compareImage.png')} style={styles.resultOverlayImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    <Text style={styles.resultText}>{`눈 유사도 ${ Math.round(mostSimilarEyeScore) }`}</Text>
                    <Text style={styles.resultText}>{`코 유사도 ${ Math.round(mostSimilarNoseScore) }`}</Text>
                    <Text style={styles.resultText}>{`입 유사도 ${ Math.round(mostSimilarMouthScore) }`}</Text>
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