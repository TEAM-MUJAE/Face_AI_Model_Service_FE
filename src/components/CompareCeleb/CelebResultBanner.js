import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


function CelebResultBanner() {

    const [bannerText, setBannerText] = useState(''); // 배너 제목 변경용

    const celebBannerResults = [
        {
            foundImage: require("../../static/img/banner/lei.jpg"),
            similarity: 41,
            ranking: 1
        },
        {
            foundImage: require("../../static/img/banner/liz.jpg"),
            similarity: 37,
            ranking: 2
        },
        {
            foundImage: require("../../static/img/banner/yujin.webp"),
            similarity: 35,
            ranking: 3
        },
        {
            foundImage: require("../../static/img/banner/wonyoung.webp"),
            similarity: 30,
            ranking: 4
        },
        {
            foundImage: require("../../static/img/banner/gaeul.webp"),
            similarity: 21,
            ranking: 5
        },
        {
            foundImage: require("../../static/img/banner/leeseo.webp"),
            similarity: 17,
            ranking: 6
        }
    ];

    const imagePressHandler = (index) => {
        console.log(`${index+1}순위 image banner clicked!`);
    }

    return (
        <ScrollView horizontal>
            <Text>닮은 연예인 순위</Text>
            {celebBannerResults.map((result, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => imagePressHandler(index)}
                >
                    <Image source={result.foundImage} style={styles.image} />
                    <Text>{`${result.ranking} 순위 전체 유사도 : ${result.similarity}%`}</Text>
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