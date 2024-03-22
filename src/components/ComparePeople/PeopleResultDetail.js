import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { setIsAnother } from '../../features/similarityDataSlice';


function PeopleResultDetail() {

    const dispatch = useDispatch();

    /* Redux Store에서 데이터 가져오기 */
    const firstTotalSimilarity = useSelector(state => state.similarityData.result1); // 전체유사도 정보1
    const secondTotalSimilarity = useSelector(state => state.similarityData.result2); // 전체유사도 정보2
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths); // 랜드마크 SIFT 인코딩 문자열 정보
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eye_similarity); // 왼쪽 눈 유사도 정보
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eye_similarity); // 오른쪽 눈 유사도 정보
    const noseSimilarity = useSelector(state => state.similarityData.nose_similarity); // 코 유사도 정보
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_similarity); // 입 유사도 정보
    const isAnother = useSelector(state => state.similarityData.isAnother);
    /* ======================== 데이터 재구성 ======================== */

    /* totalSimilarity 데이터 */
    const firstTotalScore = firstTotalSimilarity.distance
    const secondTotalScore = secondTotalSimilarity.distance

    /* landmarkSift 데이터 */
    const reformattedLandmarkSift = landmarkSift.map(([name, path]) => ({ name, path }));
    const firstLandmarkSiftPath = reformattedLandmarkSift[0].path // 첫번째 사람의 랜드마크 SIFT 인코딩 문자열
    const secondLandmarkSiftPath = reformattedLandmarkSift[1].path // 두번째 사람의 랜드마크 SIFT 인코딩 문자열

    /* eyeSimilarity 데이터를 score 평균 */
    console.log("leftEyeSimilarity : ", leftEyeSimilarity)
    console.log("rightEyeSimilarity : ", rightEyeSimilarity)
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
    const firstEyeScore = reformattedEyeSimilarity[0].score
    const secondEyeScore = reformattedEyeSimilarity[1].score

    /* noseSimilarity 데이터 */
    console.log("noseSimilarity : ", noseSimilarity)
    const reformattedNoseSimilarity = noseSimilarity[0].map(([path, score]) => ({ path, score }));
    console.log("reformattedNoseSimilarity : ", reformattedNoseSimilarity)
    // const firstNoseScore = reformattedNoseSimilarity[0].score
    // const secondNoseScore = reformattedNoseSimilarity[1].score

    /* mouthSimilarity 데이터 */
    console.log("mouthSimilarity : ", mouthSimilarity)
    const reformattedMouthSimilarity = mouthSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedMouthSimilarity : ", reformattedMouthSimilarity)
    // const firstMouthScore = reformattedMouthSimilarity[0].score
    // const secondMouthScore = reformattedMouthSimilarity[1].score

    /* 전체 유사도 스케일링 */
    let firstSimilarText = '';
    let secondSimilarText = '';

    if (firstTotalScore < 0.576) {
        firstSimilarText = '와 ! 도플갱어 수준으로 닮았어요.. 두 사람은 전생에 동일인이었을 지도 모르겠군요!';
    } else if (0.576 < firstTotalScore < 0.656 ) {
        firstSimilarText = '아주아주 많이~ 닮은 사람으로 보여요. 평소에 닮았다는 소리 주변에서 자주 듣진 않나요?';
    } else if (0.656 < firstTotalScore < 0.69) {
        firstSimilarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. 조금 더 닮을 수 있게 붙어있는 시간을 좀 늘려볼까요? ^^';
    } else {
        firstSimilarText = `아쉽게도 더 닮은 사람인 1번사진과 닮은 정도가 낮아요. 주변 사람에게 서로의 매력을 어필하는게 중요해보이는군요!'`;
    }

    if (secondTotalScore < 0.576) {
        secondSimilarText = '와 ! 도플갱어 수준으로 닮았어요.. 두 사람은 전생에 동일인이었을 지도 모르겠군요!';
    } else if (0.576 < secondTotalScore < 0.656 ) {
        secondSimilarText = '아주아주 많이~ 닮은 사람으로 보여요. 평소에 닮았다는 소리 주변에서 자주 듣진 않나요?';
    } else if (0.656 < secondTotalScore < 0.69) {
        secondSimilarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. 조금 더 닮을 수 있게 붙어있는 시간을 좀 늘려볼까요? ^^';
    } else {
        secondSimilarText = `아쉽게도 더 닮은 사람인 1번사진과 닮은 정도가 낮아요. 주변 사람에게 서로의 매력을 어필하는게 중요해보이는군요!'`;
    }

    /* 인물 번호 */
    // const imageNumber = 1;


    // const firstButtonPressHandler = () => {
    //     console.log('first Button Pressed!');
    //     imageNumber = 1;
    // }

    const anotherPressHandler = () => {
        console.log('second Button Pressed!');
        dispatch(setIsAnother(true));
    }



    /* 가장 닮은 부분을 출력하기 위한 과정 */
    const firstLowestScore = Math.min(eyeScore, noseScore, mouthScore);
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
        <View style={styles.peopleResultContainer}>
            <TouchableOpacity onPress={anotherPressHandler} style={styles.button}>
                <Text style={styles.buttonText}>다른 인물 결과 보기</Text>
            </TouchableOpacity>
            {!isAnother && <Text>{firstSimilarText}</Text>}
            {!isAnother && <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ firstLandmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    {/* <Text style={styles.resultText}>{`눈 유사도 ${eyeScore}`}</Text>
                    <Text style={styles.resultText}>{`코 유사도 ${noseScore}`}</Text>
                    <Text style={styles.resultText}>{`입 유사도 ${mouthScore}`}</Text> */}
                    <Text style={styles.resultText}>{`서로의 얼굴 특징에서 가장 닮은 부분은 ${mostSimilarFeature} 부분 이군요!`}</Text>
                </View>
            </View>}
            {isAnother && <Text>{firstSimilarText}</Text>}
            {isAnother && <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ firstLandmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    {/* <Text style={styles.resultText}>{`눈 유사도 ${eyeScore}`}</Text>
                    <Text style={styles.resultText}>{`코 유사도 ${noseScore}`}</Text>
                    <Text style={styles.resultText}>{`입 유사도 ${mouthScore}`}</Text> */}
                    <Text style={styles.resultText}>{`서로의 얼굴 특징에서 가장 닮은 부분은 ${mostSimilarFeature} 부분 이군요!`}</Text>
                </View>
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    peopleResultContainer: {
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
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    resultTextContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    resultText: {
        textAlign: 'center'
    },
    button: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#6F50F8',
        borderRadius: 5,
      },
      buttonText: {
        color: '#ffffff',
      },
})

export default PeopleResultDetail;