import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import { setCurrentRankPath } from '../../features/similarityDetailSlice';

function CelebResultBanner() {

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

    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedTotalSimilarity : ", reformattedTotalSimilarity)


    const dispatch = useDispatch();

    const imagePressHandler = (index) => {
        console.log(`${index+1}순위 image banner clicked!`);
        dispatch(setCurrentRankPath(reformattedTotalSimilarity[index].path));
    }

    return (
        <ScrollView horizontal>
            <Text>닮은 연예인 순위</Text>
            {reformattedTotalSimilarity.map((result, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => imagePressHandler(index)}
                >
                    {/* <Image source={result.foundImage} style={styles.image} /> */}
                    <Text>{`${index+1} 순위 전체 유사도 : ${Math.round(result.score)} `}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200
    }
  });

export default CelebResultBanner;