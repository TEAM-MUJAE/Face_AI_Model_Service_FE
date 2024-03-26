import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


import { useSelector } from 'react-redux';
import Eye from '../../static/img/resource/eye.png';
import Nose from '../../static/img/resource/nose.png';
import Mouth from '../../static/img/resource/mouth.png';

function OtherResultDetail() {

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.verification_result); // 전체유사도 정보
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths); // 랜드마크 SIFT 인코딩 문자열 정보
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eye_similarity); // 왼쪽 눈 유사도 정보
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eye_similarity); // 오른쪽 눈 유사도 정보
    const noseSimilarity = useSelector(state => state.similarityData.nose_similarity); // 코 유사도 정보
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_similarity); // 입 유사도 정보

    /* ======================== 데이터 재구성 ======================== */

    /* totalSimilarity 데이터 */
    const totalScore = totalSimilarity.distance;

    /* landmarkSift 데이터 */
    const reformattedLandmarkSift = landmarkSift[0].map(([name, path]) => ({ name, path }));
    const landmarkSiftPath = reformattedLandmarkSift[0].path

    /* eyeSimilarity 데이터를 score 평균 */
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
    const reformattedEyeSimilarity = averageEyeSimilarity.map(([path, score]) => ({ path, score }));
    const eyeScore = reformattedEyeSimilarity[0].score

    /* noseSimilarity 데이터 */
    const reformattedNoseSimilarity = noseSimilarity.map(([path, score]) => ({ path, score }));
    const noseScore = reformattedNoseSimilarity[0].score

    /* mouthSimilarity 데이터 */
    const reformattedMouthSimilarity = mouthSimilarity.map(([path, score]) => ({ path, score }));
    const mouthScore = reformattedMouthSimilarity[0].score

    /* 전체 유사도 스케일링 */
    let similarText = '';

    if (totalScore < 0.576) {
        similarText = '와 ! 도플갱어 아니세요? \n 두 사람은 전생에 동일인이었을지도...';
    } else if (totalScore >= 0.576 && totalScore < 0.656) {
        similarText = '아주아주 많이~ 닮은 사람으로 보여요. \n 평소에 닮았다는 소리 주변에서 자주 듣진 않나요?';
    } else if (totalScore >= 0.656 && totalScore < 0.69) {
        similarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. \n 조금 더 닮을 수 있게 붙어있는 시간을 좀 늘려볼까요? ^^';
    } else {
        similarText = '아쉽게도 닮은 정도가 낮아요. \n 주변 사람에게 서로의 매력을 어필하는게 중요해보이는군요!';
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

    /* ======================== 데이터 재구성 끝 ======================== */
 

    return (
        <View style={styles.otherResultContainer}>
            <View style={styles.siftResultContainer}>
                <Text style={styles.descriptionText}>서로 닮았다고 생각하는 부분을 연결해 보았어요</Text>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ landmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <Text style={styles.descriptionText}>{similarText}</Text>
                <View style={styles.resultTextContainer}>
                    <Text style={styles.descriptionText}>{`서로의 얼굴 특징에서 가장 닮은 부분은 \n ${mostSimilarFeature} 부분 이군요!`}</Text>
                </View>
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    otherResultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 30,
        // backgroundColor: 'red'
    },
    siftResultContainer: {
        width: width * 0.9, // 화면 너비의 90%를 차지하도록 조정
        height: height * 0.4, // 화면 높이의 50%를 차지하도록 조정
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // backgroundColor: '#F4EB64',
    },
    siftResultImageContainer: {
        width: '100%', // 컨테이너 너비에 맞춤
        height: '70%', // 컨테이너 높이의 55%를 차지하도록 조정
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    siftResultImage: {
        width: '100%', // 부모 컨테이너 너비에 맞춤
        height: '100%', // 부모 컨테이너 높이에 맞춤
        resizeMode: 'contain'
    },
    ImageSize: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        // backgroundColor: 'green'
    },
    resultTextContainer: {
        flex: 1,
        // justify/Content: 'center',
        // backgroundColor: 'green',
        // marginBottom: 20,
        marginTop: 30,
        alignItems: 'center',
        // borderWidth: 1,
    },
    resultText: {
        textAlign: 'center',
        fontSize: width * 0.04,
        // backgroundColor: 'puple',
    },
    descriptionText: {
        fontSize: width * 0.04,
        color: '#6F50F8',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor: 'red',
    },
    inputGroup: {
        flexDirection: 'row',
        width: '100%',
        // borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        margin: 10,
    },
})

export default OtherResultDetail;