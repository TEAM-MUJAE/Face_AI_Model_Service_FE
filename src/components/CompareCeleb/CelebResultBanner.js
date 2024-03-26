import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import { setSelectedImageIndex } from '../../features/compareSlice';

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
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score, celebName]) => ({ path, score, celebName }));
    // const totalScoreRank = reformattedTotalSimilarity.map(item => item.score);
    // console.log('totalScoreRank : ', totalScoreRank)


    const imagePressHandler = (index) => {
        console.log(`${index+1}순위 image banner clicked!`);
        dispatch(setSelectedImageIndex(index));
    }

    return (
        <View style={styles.container}>
            <Text>닮은 연예인 순위</Text>
            <ScrollView 
                horizontal
            >
                {reformattedTotalSimilarity.map((result, index) => {
                    const base64String = result.path;

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => imagePressHandler(index)}
                            style={styles.imageContainer}
                        >
                            <Image source={{ uri: `data:image/png;base64,${ base64String }` }} style={ styles.image } />
                            <Text style={styles.imageText}>{`${index+1}위 : ${result.celebName} `}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
    },
    imageContainer: {
        alignItems: 'center',
        marginRight: 10,
        // backgroundColor: 'red',
    },
    image: {
      width: 150,
      height: 150,
    //   backgroundColor: 'gray',
    },
    imageText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6F50F8',
        paddingRight: 5,
        paddingLeft: 5,
    }
  });

export default CelebResultBanner;