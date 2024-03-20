import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';


function PeopleResultDetail() {

    /* Redux Store에서 데이터 가져오기 */
    const firstTotalSimilarity = useSelector(state => state.similarityData.result1); // 전체유사도 정보1
    const secondTotalSimilarity = useSelector(state => state.similarityData.result2); // 전체유사도 정보2
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths); // 랜드마크 SIFT 인코딩 문자열 정보
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eye_similarity); // 왼쪽 눈 유사도 정보
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eye_similarity); // 오른쪽 눈 유사도 정보
    const noseSimilarity = useSelector(state => state.similarityData.nose_similarity); // 코 유사도 정보
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_similarity); // 입 유사도 정보

    /* ======================== 데이터 재구성 ======================== */

    /* totalSimilarity 데이터 */
    const reformattedFirstTotalSimilarity = firstTotalSimilarity.distance
    const reformattedSecondTotalSimilarity = secondTotalSimilarity.distance
    console.log("reformattedFirstTotalSimilarity : ", reformattedFirstTotalSimilarity)
    console.log("reformattedSecondTotalSimilarity : ", reformattedSecondTotalSimilarity)


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
    const eyeScore = reformattedEyeSimilarity[0].score

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

    /* 가장 닮은 부분을 출력하기 위한 과정 */
    // const lowestScore = Math.min(eyeScore, noseScore, mouthScore);
    // let mostSimilarFeature = '';

    // if (lowestScore === eyeScore) {
    //     mostSimilarFeature = '눈';
    // } else if (lowestScore === noseScore) {
    //     mostSimilarFeature = '코';
    // } else {
    //     mostSimilarFeature = '입';
    // }

    /* ======================== 데이터 재구성 끝 ======================== */
 

    return (
        <View style={styles.peopleResultContainer}>
            <Text>{`전체 유사도 ${ reformattedFirstTotalSimilarity }`}</Text>
            <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ firstLandmarkSiftPath }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    {/* <Text style={styles.resultText}>{`눈 유사도 ${eyeScore}`}</Text>
                    <Text style={styles.resultText}>{`코 유사도 ${noseScore}`}</Text>
                    <Text style={styles.resultText}>{`입 유사도 ${mouthScore}`}</Text> */}
                    {/* <Text style={styles.resultText}>{`서로의 얼굴 특징에서 가장 닮은 부분은 ${mostSimilarFeature} 부분 이군요!`}</Text> */}
                </View>
            </View>
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
    }
})

export default PeopleResultDetail;