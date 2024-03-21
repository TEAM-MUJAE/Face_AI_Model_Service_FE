import { StyleSheet, Text, View, Image } from 'react-native';


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
    const reformattedTotalSimilarity = totalSimilarity.distance
    console.log("reformattedTotalSimilarity : ", reformattedTotalSimilarity)

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
            <Text>{`전체 유사도 ${ reformattedTotalSimilarity }`}</Text>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ landmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Eye}/>
                    <Text style={styles.resultText}>{`눈 유사도 ${eyeScore}`}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Nose}/>
                    <Text style={styles.resultText}>{`코 유사도 ${noseScore}`}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Mouth}/>
                    <Text style={styles.resultText}>{`입 유사도 ${mouthScore}`}</Text>
                    </View>
                    <Text style={styles.descriptionText}>{`서로의 얼굴 특징에서 가장 닮은 부분은 ${mostSimilarFeature} 부분 이군요!`}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    otherResultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 30,
        // backgroundColor: 'red'
    },
    siftResultContainer: {
        width: 500,
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F4EB64',
        paddingTop: 0,
    },
    siftResultImageContainer: {
        width: 300,
        height: 300,
        // justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    siftResultImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        // backgroundColor: 'yellow'
    },
    ImageSize: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        // backgroundColor: 'green'
    },
    resultTextContainer: {
        // flex: 1,
        // justify/Content: 'center',
        // backgroundColor: 'green',
        marginBottom: 30,
        marginTop: 10,
        alignItems: 'center',
    },
    resultText: {
        textAlign: 'center'
    },
    descriptionText: {
        fontSize: 15,
        color: '#6F50F8', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
        marginTop: 10,
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