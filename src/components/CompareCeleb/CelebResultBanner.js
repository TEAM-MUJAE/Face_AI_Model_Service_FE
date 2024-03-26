import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';

function CelebResultBanner() {

    const dispatch = useDispatch();

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eyes_socore_distances);
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eyes_socore_distances);
    const noseSimilarity = useSelector(state => state.similarityData.nose_socore_distances);
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_socore_distances);

    /* totalSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);

    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    const totalScoreRank = reformattedTotalSimilarity.map(item => item.score);
    console.log('totalScoreRank : ', totalScoreRank)


    const imagePressHandler = (index) => {
        console.log(`${index+1}순위 image banner clicked!`);
    }

    return (
        <View style={styles.container}>
            <Text>닮은 연예인 순위</Text>
            <ScrollView 
                horizontal
            >
                {reformattedTotalSimilarity.map((result, index) => {
                    const base64String = result.path;

                    /* score 캘리브레이션 */
                    let similarText = '';

                    if (result.score < 0.536) {
                        similarText = '흡사 동일인';
                    } else if (result.score >= 0.536 && result.score < 0.587) {
                        similarText = '많이~ 닮음';
                    } else if (result.score >= 0.587 && result.score < 0.69) {
                        similarText = '닮을 뻔;';
                    } else {
                        similarText = '안 닮음';
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => imagePressHandler(index)}
                        >
                            <Image source={{ uri: `data:image/png;base64,${ base64String }` }} style={ styles.image } />
                            <Text>{`${index + 1}위와 닮은정도 : ${similarText} `}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    },
    image: {
      width: 150,
      height: 150,
      backgroundColor: 'gray',
    }
  });

export default CelebResultBanner;