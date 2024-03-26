
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


import { useSelector } from 'react-redux';


function TwoResultRank({ path, score, name, celebName, encPath }) {

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    // const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths);
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eyes_socore_distances);
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eyes_socore_distances);
    const noseSimilarity = useSelector(state => state.similarityData.nose_socore_distances);
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_socore_distances);

    /* =============== 데이터 정렬 ================== */

    /* totalSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);

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
    const sortedEyeSimilarity = averageEyeSimilarity.sort((a, b) => a[1] - b[1]);

    /* noseSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedNoseSimilarity = [...noseSimilarity].sort((a, b) => a[1] - b[1]);

    /* mouthSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedMouthSimilarity = [...mouthSimilarity].sort((a, b) => a[1] - b[1]);

    /* =============================================== */



    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    
    const reformattedEyeSimilarity = sortedEyeSimilarity.map(([path, score]) => ({ path, score }));
    const eyeScore = reformattedEyeSimilarity[0].score;
    const reformattedNoseSimilarity = sortedNoseSimilarity.map(([path, score]) => ({ path, score }));
    const noseScore = reformattedNoseSimilarity[0].score;
    const reformattedMouthSimilarity = sortedMouthSimilarity.map(([path, score]) => ({ path, score }));
    const mouthScore = reformattedMouthSimilarity[0].score;
    
    /* 전체 유사도 스케일링 */
    let similarText = '';

    if (score < 0.536) {
        similarText = '어라라.. 혹시 본인 아니신가요..? \n 오늘도 여전히 눈이 부시네요.';
    } else if (score >= 0.536 && score < 0.587) {
        similarText = '아주 많이~ 닮았어요! 이 연예인이 평소에 무엇이 잘 어울리는지 얼른 찾아볼까요?';
    } else if (score >= 0.587 && score < 0.69) {
        similarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. 조금만 더 노력(?)하면 닮을 수 있을 것 같아요.';
    } else {
        similarText = '아쉽게도 닮은 정도가 낮아요. 하지만 이것은 곧 당신만의 매력이 넘쳐난다는 뜻이라고 생각해요.';
    }

    /* 가장 닮은 부분을 출력하기 위한 과정 */
    const lowestScore = Math.min(eyeScore, noseScore, mouthScore);
    let mostSimilarFeature = '';

    if (lowestScore === eyeScore) {
        mostSimilarFeature = '눈';
    } else if (lowestScore === noseScore) {
        mostSimilarFeature = '코';
    } else {
        mostSimilarFeature = '입';
    }

    return (
        <View style={styles.twoResultContainer}>
            <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Text style={styles.resultPointText1}>{`${celebName}님과`}</Text>
                    <Text style={styles.resultText}>닮았다고 생각하는 부분을 연결해 보았어요</Text>
                    <Image source={{ uri: `data:image/png;base64,${ encPath }` }} style={styles.siftResultImage} />
                    <Text style={styles.resultText}>{similarText}</Text>
                    <View style={styles.resultTextContainer}>
                        <Text style={styles.resultText}>서로의 얼굴 특징에서 가장 닮은 부분은...</Text>
                        <Text style={styles.resultPointText2}>{`${mostSimilarFeature} 부분 이군요!`}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    twoResultContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    siftResultContainer: {
        // width: width * 0.9, // 화면 너비의 90%를 차지하도록 조정
        // height: height * 0.3, // 화면 높이의 50%를 차지하도록 조정
        // marginTop: 10,
        // justifyContent: 'center',
        // backgroundColor: '#333333',
    },
    siftResultImageContainer: {
        // width: '100%', // 컨테이너 너비에 맞춤
        // height: '100%', // 컨테이너 높이의 55%를 차지하도록 조정
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',

    },
    siftResultImage: {
        width: width * 0.9,
        height: height * 0.28,
        justifyContent: 'center',
        resizeMode: 'contain'

    },
    resultTextContainer: {
        justifyContent: 'center',
        // backgroundColor: 'yellow',

    },
    resultText: {
        fontSize: width * 0.04,
        color: '#6F50F8', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,

    },
    resultPointText1: {
        fontSize: 20,
        color: '#6F50F8', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
    },
    resultPointText2: {
        fontSize: 25,
        color: '#6F50F8', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
        
    },
})

export default TwoResultRank;
