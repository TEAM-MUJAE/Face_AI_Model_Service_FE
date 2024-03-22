import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';
import Eye from '../../static/img/resource/eye.png';
import Nose from '../../static/img/resource/nose.png';
import Mouth from '../../static/img/resource/mouth.png';


function TwoResultRank() {

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    const landmarkSift = useSelector(state => state.similarityData.landmark_sift_paths);
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eyes_socore_distances);
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eyes_socore_distances);
    const noseSimilarity = useSelector(state => state.similarityData.nose_socore_distances);
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_socore_distances);

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
    const sortedEyeSimilarity = averageEyeSimilarity.sort((a, b) => a[1] - b[1]);

    /* noseSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedNoseSimilarity = [...noseSimilarity].sort((a, b) => a[1] - b[1]);

    /* mouthSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedMouthSimilarity = [...mouthSimilarity].sort((a, b) => a[1] - b[1]);

    /* =============================================== */


    const keys = Object.keys(landmarkSift);

    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    const totalScore = reformattedTotalSimilarity[0].score;
    const reformattedLandmarkSift = landmarkSift[keys[0]].map(([name, path]) => ({ name, path }));
    const reformattedEyeSimilarity = sortedEyeSimilarity.map(([path, score]) => ({ path, score }));
    const eyeScore = reformattedEyeSimilarity[0].score;
    const reformattedNoseSimilarity = sortedNoseSimilarity.map(([path, score]) => ({ path, score }));
    const noseScore = reformattedNoseSimilarity[0].score;
    const reformattedMouthSimilarity = sortedMouthSimilarity.map(([path, score]) => ({ path, score }));
    const mouthScore = reformattedMouthSimilarity[0].score;
    
    /* 전체 유사도 스케일링 */
    let similarText = '';

    if (totalScore < 0.576) {
        similarText = '어라라.. 혹시 본인 아니신가요..? 아주 눈이 부십니다.';
    } else if (0.576 < totalScore < 0.656 ) {
        similarText = '아주 많이~ 닮았어요! 이 연예인이 평소에 무엇이 잘 어울리는지 얼른 찾아볼까요?';
    } else if (0.656 < totalScore < 0.69) {
        similarText = '아차차 ! 닮을 뻔 했는데 살짝 아쉽네요. 조금만 더 노력(?)하면 닮을 수 있을 것 같아요.';
    } else {
        similarText = '아쉽게도 닮은 정도가 낮아요. 하지만 이것은 곧 당신만의 매력이 넘쳐난다는 뜻이라고 생각해요.';
    }

    /* 현재 순위 이미지 경로에서 파일 확장자 추출 */
    console.log("currentRankPath : ", currentRankPath)
    const filename = currentRankPath.split('/').pop();
    const fileExtension = filename.split('.').pop();
    console.log("fileExtension : ", fileExtension)

    return (
        <View style={styles.twoResultContainer}>
            <Text>{similarText}</Text>
            <View style={styles.siftResultContainer}>
                <View style={styles.siftResultImageContainer}>
                    <Image source={{ uri: `data:image/png;base64,${ reformattedLandmarkSift[0].path }` }} style={styles.siftResultImage} />
                </View>
                <View style={styles.resultTextContainer}>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Eye}/>
                    <Text style={styles.resultText}>{`눈 유사도 ${ Math.round( eyeScore ) }`}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Nose}/>
                    <Text style={styles.resultText}>{`코 유사도 ${ Math.round( noseScore ) }`}</Text>
                    </View>
                    <View style={styles.inputGroup}>
                    <Image style={styles.ImageSize} source={Mouth}/>
                    <Text style={styles.resultText}>{`입 유사도 ${ Math.round( mouthScore ) }`}</Text>
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