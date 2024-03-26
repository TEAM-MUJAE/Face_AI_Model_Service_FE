import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { setMostSimilarPartText } from '../../features/similarityDataSlice';



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
    console.log("firstEyeScore : ", firstEyeScore)
    const secondEyeScore = reformattedEyeSimilarity[1].score
    console.log("secondEyeScore : ", secondEyeScore)

    /* noseSimilarity 데이터 */
    console.log("noseSimilarity : ", noseSimilarity)
    const reformattedNoseSimilarity = noseSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedNoseSimilarity : ", reformattedNoseSimilarity)
    const firstNoseScore = reformattedNoseSimilarity[0].score
    console.log("firstNoseScore : ", firstNoseScore)
    const secondNoseScore = reformattedNoseSimilarity[1].score
    console.log("secondNoseScore : ", secondNoseScore)

    /* mouthSimilarity 데이터 */
    console.log("mouthSimilarity : ", mouthSimilarity)
    const reformattedMouthSimilarity = mouthSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedMouthSimilarity : ", reformattedMouthSimilarity)
    const firstMouthScore = reformattedMouthSimilarity[0].score
    console.log("firstMouthScore : ", firstMouthScore)
    const secondMouthScore = reformattedMouthSimilarity[1].score
    console.log("secondMouthScore : ", secondMouthScore)

    /* 전체 유사도 스케일링 */
    let firstSimilarText = '';
    let secondSimilarText = '';

    if (firstTotalScore < 0.576) {
        firstSimilarText = '와 ! 도플갱어 수준으로 닮았어요.. \n 두 사람은 전생에 동일인이었을 지도 모르겠군요!';
    } else if (result.score >= 0.576 && result.score < 0.656) {
        firstSimilarText = '아주아주 많이~ 닮은 사람으로 보여요. \n 평소에 닮았다는 소리 주변에서 자주 듣진 않나요?';
    } else if (result.score >= 0.656 && result.score < 0.69) {
        firstSimilarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. \n 조금 더 닮을 수 있게 붙어있는 시간을 좀 늘려볼까요? ^^';
    } else {
        firstSimilarText = `아쉽게도 닮은 정도가 낮아요. \n 개성이 강한건 곧 매력이랍니다!`;
    }

    if (secondTotalScore < 0.576) {
        secondSimilarText = '와 ! 도플갱어 수준으로 닮았어요.. \n 두 사람은 전생에 동일인이었을 지도 모르겠군요!';
    } else if (0.576 < secondTotalScore < 0.656 ) {
        secondSimilarText = '아주아주 많이~ 닮은 사람으로 보여요. \n 평소에 닮았다는 소리 주변에서 자주 듣진 않나요?';
    } else if (0.656 < secondTotalScore < 0.69) {
        secondSimilarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. \n 조금 더 닮을 수 있게 붙어있는 시간을 좀 늘려볼까요? ^^';
    } else {
        secondSimilarText = `아쉽게도 닮은 정도가 낮아요. \n 개성이 강한건 곧 매력이랍니다!`;
    }

    /* 얼굴 특징 중 가장 닮은 부분을 출력하기 위한 과정 */

    const firstLowestScore = Math.min(firstEyeScore, firstNoseScore, firstMouthScore);
    let mostFirstSimilarFeature = '';

    if (firstLowestScore === firstEyeScore) {
        mostFirstSimilarFeature = '눈';
    } else if (firstLowestScore === firstNoseScore) {
        mostFirstSimilarFeature = '코';
    } else {
        mostFirstSimilarFeature = '입';
    }

    const secondLowestScore = Math.min(secondEyeScore, secondNoseScore, secondMouthScore);
    let mostSecondSimilarFeature = '';

    if (secondLowestScore === secondEyeScore) {
        mostSecondSimilarFeature = '눈';
    } else if (secondLowestScore === secondNoseScore) {
        mostSecondSimilarFeature = '코';
    } else {
        mostSecondSimilarFeature = '입';
    }

    /* 둘 중 더 닮은 인물 */
    const lowerTotalScore = Math.min(firstTotalScore, secondTotalScore);
    const [isLowerScore, setIsLowerScore] = useState(firstTotalScore > secondTotalScore); // 둘 중 더 낮은 점수를 가진 사람을 먼저 렌더링하기 위한 상태

    let imageNumberText = '';

    if (lowerTotalScore === firstTotalScore) {
        imageNumberText = '첫번째';
    } else {
        imageNumberText = '두번째';
    }

    const someText = isLowerScore ? '두번째' : '첫번째';

    /* 얼굴 특징 중 매치되는 부분이 없을 경우 */ 
    const mostSimilarPartText = useSelector(state => state.similarityData.mostSimilarPartText);
    const isUnmatchable = (score) => score === 10000000000 || score === undefined;

    const isAnyFirstUnmatchable = [firstEyeScore, firstNoseScore, firstMouthScore].some(isUnmatchable);
    console.log("isAnyFirstUnmatchable : ", isAnyFirstUnmatchable)
    const isAnySecondUnmatchable = [secondEyeScore, secondNoseScore, secondMouthScore].some(isUnmatchable);
    console.log("isAnySecondUnmatchable : ", isAnySecondUnmatchable)

    useEffect(() => {
        if (isLowerScore) {
            dispatch(setMostSimilarPartText
                (
                    isAnyFirstUnmatchable ? 
                    '얼굴 특징 중 매치되는 부분이 없어요!' : `서로의 얼굴 특징에서 가장 닮은 부분은 ${mostFirstSimilarFeature} 부분 이군요!`
                )
            );
        } else {
            dispatch(setMostSimilarPartText
                (
                    isAnySecondUnmatchable ? 
                    '얼굴 특징 중 매치되는 부분이 없어요!' : `서로의 얼굴 특징에서 가장 닮은 부분은 ${mostSecondSimilarFeature} 부분 이군요!`
                )
            );
        }

    }, [isLowerScore, isAnyFirstUnmatchable, mostFirstSimilarFeature, isAnySecondUnmatchable, mostSecondSimilarFeature]);

    /* ======================== 데이터 재구성 끝 ======================== */
 

    const anotherPressHandler = () => {
        setIsLowerScore(prevState => !prevState);
    }
    

    return (
        <View style={styles.peopleResultContainer}>
            <Text style={styles.resultText}>{`${imageNumberText} 인물과 더 닮은것 같아요!`}</Text>
            {!isLowerScore && <Text style={styles.resultText}>{`${someText} 인물과 닮았다고 생각하는 부분을 연결해 보았어요`}</Text>}
            {!isLowerScore && <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ firstLandmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <Text style={styles.resultText}>{firstSimilarText}</Text>
                <View style={styles.resultTextContainer}>
                    <Text style={styles.resultText}>{mostSimilarPartText}</Text>
                </View>
            </View>}
            {isLowerScore && <Text style={styles.resultText}>{`${someText} 인물과 닮았다고 생각하는 부분을 연결해 보았어요`}</Text>}
            {isLowerScore && <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ secondLandmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <Text style={styles.resultText}>{secondSimilarText}</Text>
                <View style={styles.resultTextContainer}>
                    <Text style={styles.resultText}>{mostSimilarPartText}</Text>
                </View>
            </View>}
            <TouchableOpacity onPress={anotherPressHandler} style={styles.button}>
                <Text style={styles.buttonText}>다른 인물 결과 보기</Text>
            </TouchableOpacity>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    peopleResultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#cccccc',
    },
    siftResultContainer: {
        width: width * 0.9, // 화면 너비의 90%를 차지하도록 조정
        height: height * 0.5, // 화면 높이의 50%를 차지하도록 조정
        // marginTop: 10,
        // backgroundColor: '#333333',
    },
    siftResultImageContainer: {
        width: '100%', // 컨테이너 너비에 맞춤
        height: '70%', // 컨테이너 높이의 55%를 차지하도록 조정
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    siftResultImage: {
        width: '100%', // 컨테이너 너비에 맞춤
        height: '80%', // 컨테이너 높이의 55%를 차지하도록 조정
        resizeMode: 'contain'
    },
    resultTextContainer: {
        justifyContent: 'center'
    },
    resultText: {
        fontSize: width * 0.04,
        color: '#6F50F8', // Slightly lighter text for the description
        textAlign: 'center', // Center align description
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#6F50F8',
        borderRadius: 5,
        zIndex: 1
      },
    buttonText: {
        color: '#ffffff',
    },
})

export default PeopleResultDetail;