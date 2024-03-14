import { StyleSheet, Text, View, Image } from 'react-native';


import { useSelector } from 'react-redux';


import CropOriginContent from './CropOriginContent';
import TwoResultRank from './TwoResultRank';


function TwoResultContent() {

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
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


    // const mostSimilarTotalScore = reformattedTotalSimilarity[0].score; // 가장 유사한 사진의 전체 유사도

    // const mostSimilarEyeScoreObj = reformattedEyeSimilarity.find(obj => obj.path === mostSimilarCelebPath);
    // const mostSimilarEyeScore = mostSimilarEyeScoreObj ? mostSimilarEyeScoreObj.score : 0; 

    // const mostSimilarNoseScoreObj = reformattedNoseSimilarity.find(obj => obj.path === mostSimilarCelebPath);
    // const mostSimilarNoseScore = mostSimilarNoseScoreObj ? mostSimilarNoseScoreObj.score : 0;
    
    // const mostSimilarMouthScoreObj = reformattedMouthSimilarity.find(obj => obj.path === mostSimilarCelebPath);
    // const mostSimilarMouthScore = mostSimilarMouthScoreObj ? mostSimilarMouthScoreObj.score : 0; 


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
            <TwoResultRank />
        </View>
    );
}

export default TwoResultContent;