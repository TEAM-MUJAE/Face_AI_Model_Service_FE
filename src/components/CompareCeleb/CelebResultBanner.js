import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import { setCurrentRankPath } from '../../features/similarityDetailSlice';

function CelebResultBanner() {

    const dispatch = useDispatch();

    /* 이미지 경로매핑 */
    const imagePaths = {
        ANYUJIN: require('../../app/img_for_ai/ANYUJIN.png'),
        BaeSuji: require('../../app/img_for_ai/BaeSuji.png'),
        ByeonBaekhyeon: require('../../app/img_for_ai/ByeonBaekhyeon.png'),
        ByeonYohan: require('../../app/img_for_ai/ByeonYohan.png'),
        ChoiYena: require('../../app/img_for_ai/ChoiYena.png'),
        ChoJeongseok: require('../../app/img_for_ai/ChoJeongseok.png'),
        DoGyeongsu: require('../../app/img_for_ai/DoGyeongsu.png'),
        GangHodong: require('../../app/img_for_ai/GangHodong.png'),
        GISELLE: require('../../app/img_for_ai/GISELLE.png'),
        GoChangseok: require('../../app/img_for_ai/GoChangseok.png'),
        GongYu: require('../../app/img_for_ai/GongYu.png'),
        HanJimin: require('../../app/img_for_ai/HanJimin.png'),
        HanSohui: require('../../app/img_for_ai/HanSohui.png'),
        HanYeseul: require('../../app/img_for_ai/HanYeseul.png'),
        HongEunchae: require('../../app/img_for_ai/HongEunchae.png'),
        HuhYunjin: require('../../app/img_for_ai/HuhYunjin.png'),
        HyunBin: require('../../app/img_for_ai/HyunBin.png'),
        ImNayeon: require('../../app/img_for_ai/ImNayeon.png'),
        IU: require('../../app/img_for_ai/IU.png'),
        JangDaa: require('../../app/img_for_ai/JangDaa.png'),
        JangDonggeon: require('../../app/img_for_ai/JangDonggeon.png'),
        JangDongwoo: require('../../app/img_for_ai/JangDongwoo.png'),
        JangHyeok: require('../../app/img_for_ai/JangHyeok.png'),
        JangWonyeong: require('../../app/img_for_ai/JangWonyeong.png'),
        Jennie: require('../../app/img_for_ai/Jennie.png'),
        JeonJeongguk: require('../../app/img_for_ai/JeonJeongguk.png'),
        JeonJongseo: require('../../app/img_for_ai/JeonJongseo.png'),
        Jin: require('../../app/img_for_ai/Jin.png'),
        JiSoo: require('../../app/img_for_ai/JiSoo.png'),
        JoYuri: require('../../app/img_for_ai/JoYuri.png'),
        JungWooseong: require('../../app/img_for_ai/JungWooseong.png'),
        KangDongwon: require('../../app/img_for_ai/KangDongwon.png'),
        KangHyeonguk: require('../../app/img_for_ai/KangHyeonguk.png'),
        Karina: require('../../app/img_for_ai/Karina.png'),
        Kazuha: require('../../app/img_for_ai/Kazuha.png'),
        KimChaewon: require('../../app/img_for_ai/KimChaewon.png'),
        KimDami: require('../../app/img_for_ai/KimDami.png'),
        KimGoeun: require('../../app/img_for_ai/KimGoeun.png'),
        KimHyanggi: require('../../app/img_for_ai/KimHyanggi.png'),
        KimJiwon: require('../../app/img_for_ai/KimJiwon.png'),
        KimMinju: require('../../app/img_for_ai/KimMinju.png'),
        KimSeonggyu: require('../../app/img_for_ai/KimSeonggyu.png'),
        KimSeonggyun: require('../../app/img_for_ai/KimSeonggyun.png'),
        KimSuhyeon: require('../../app/img_for_ai/KimSuhyeon.png'),
        KimTaehee: require('../../app/img_for_ai/KimTaehee.png'),
        KimTaeri: require('../../app/img_for_ai/KimTaeri.png'),
        KimYujeong: require('../../app/img_for_ai/KimYujeong.png'),
        kwonjungyeol: require('../../app/img_for_ai/kwonjungyeol.png'),
        L: require('../../app/img_for_ai/L.png'),
        LeeByeongheon: require('../../app/img_for_ai/LeeByeongheon.png'),
        LeeCheonsu: require('../../app/img_for_ai/LeeCheonsu.png'),
        LeeJunhyeok: require('../../app/img_for_ai/LeeJunhyeok.png'),
        LeeSeongjong: require('../../app/img_for_ai/LeeSeongjong.png'),
        LeeSeongyeol: require('../../app/img_for_ai/LeeSeongyeol.png'),
        LeeSuji: require('../../app/img_for_ai/LeeSuji.png'),
        MaDongseok: require('../../app/img_for_ai/MaDongseok.png'),
        NamWoohyeon: require('../../app/img_for_ai/NamWoohyeon.png'),
        ParkBogeom: require('../../app/img_for_ai/ParkBogeom.png'),
        ParkEunbin: require('../../app/img_for_ai/ParkEunbin.png'),
        ParkSeojun: require('../../app/img_for_ai/ParkSeojun.png'),
        ParkSodam: require('../../app/img_for_ai/ParkSodam.png'),
        ParkWangyu: require('../../app/img_for_ai/ParkWangyu.png'),
        PSY: require('../../app/img_for_ai/PSY.png'),
        RISA: require('../../app/img_for_ai/RISA.png'),
        RM: require('../../app/img_for_ai/RM.png'),
        ROJE: require('../../app/img_for_ai/ROJE.png'),
        Sakura: require('../../app/img_for_ai/Sakura.png'),
        SeongDongil: require('../../app/img_for_ai/SeongDongil.png'),
        ShinDongyup: require('../../app/img_for_ai/ShinDongyup.png'),
        SongGang: require('../../app/img_for_ai/SongGang.png'),
        SongGangho: require('../../app/img_for_ai/SongGangho.png'),
        SonHeungmin: require('../../app/img_for_ai/SonHeungmin.png'),
        Suga: require('../../app/img_for_ai/Suga.png'),
        SulGyeonggu: require('../../app/img_for_ai/SulGyeonggu.png'),
        V: require('../../app/img_for_ai/V.png'),
        Winter: require('../../app/img_for_ai/Winter.png'),
        YangYoseop: require('../../app/img_for_ai/YangYoseop.png'),
        YooJaeseok: require('../../app/img_for_ai/YooJaeseok.png'),
        Yoojung: require('../../app/img_for_ai/Yoojung.png'),
        YoonDujun: require('../../app/img_for_ai/YoonDujun.png'),
        YooSeungho: require('../../app/img_for_ai/YooSeungho.png'),
        YooYeonseok: require('../../app/img_for_ai/YooYeonseok.png'),
        YukSeongjae: require('../../app/img_for_ai/YukSeongjae.png'),
        Yuna: require('../../app/img_for_ai/Yuna.png')
    };

    /* Redux Store에서 데이터 가져오기 */
    const totalSimilarity = useSelector(state => state.similarityData.total_similar_faces);
    const leftEyeSimilarity = useSelector(state => state.similarityData.left_eyes_socore_distances);
    const rightEyeSimilarity = useSelector(state => state.similarityData.right_eyes_socore_distances);
    const noseSimilarity = useSelector(state => state.similarityData.nose_socore_distances);
    const mouthSimilarity = useSelector(state => state.similarityData.mouth_socore_distances);

    /* totalSimilarity 데이터를 score를 기준으로 정렬 */
    const sortedTotalSimilarity = [...totalSimilarity].sort((a, b) => a[1] - b[1]);
    console.log("sortedTotalSimilarity : ", sortedTotalSimilarity)

    /* 정렬된 데이터 재구성 */
    const reformattedTotalSimilarity = sortedTotalSimilarity.map(([path, score]) => ({ path, score }));
    console.log("reformattedTotalSimilarity : ", reformattedTotalSimilarity)


    const imagePressHandler = (index) => {
        console.log(`${index+1}순위 image banner clicked!`);
        dispatch(setCurrentRankPath(reformattedTotalSimilarity[index].path));
    }

    return (
        <View style={styles.container}>
            <Text>닮은 연예인 순위</Text>
            <ScrollView 
                horizontal
            >
                {reformattedTotalSimilarity.map((result, index) => {
                    const imageName = result.path.split('/').pop().split('.')[0];
                    console.log("imageName : ", imageName)
                    let similarText = '';

                    if (result.score < 0.576) {
                        similarText = '흡사 동일인';
                    } else if (result.score >= 0.576 && result.score < 0.656) {
                        similarText = '많이~ 닮음';
                    } else if (result.score >= 0.656 && result.score < 0.69) {
                        similarText = '닮을 뻔;';
                    } else {
                        similarText = '안 닮음';
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => imagePressHandler(index)}
                        >
                            <Image source={imagePaths[imageName]} style={ styles.image } />
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