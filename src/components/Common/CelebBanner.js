import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';


import { setSelectedImageIndex } from '../../features/secondCompareSlice';
import { setSelectedImage } from '../../features/secondCompareSlice';


function CelebBanner() {

    const selectedImage = useSelector(state => state.secondCompare.selectedImageIndex);
    const dispatch = useDispatch();

    const bannerImages = [
        require("../../static/img/banner/lei.jpg"),
        require("../../static/img/banner/liz.jpg"),
        require("../../static/img/banner/yujin.webp"),
        require("../../static/img/banner/wonyoung.webp"),
        require("../../static/img/banner/gaeul.webp"),
        require("../../static/img/banner/leeseo.webp"),
    ];

    const imagePressHandler = (image, index) => {
        console.log(`${index+1}번째 image banner clicked!`);
        dispatch(setSelectedImageIndex(index));
        dispatch(setSelectedImage(image))
    }

    return (
        <ScrollView horizontal>
            <Text>비교하고 싶은 연예인을 선택하면 직접 비교할 수 있어요.</Text>
            {bannerImages.map((image, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => imagePressHandler(image, index)}
                    style={[
                        styles.imageContainer,
                        selectedImage === index && styles.selectedImageContainer
                    ]}
                >
                    <Image source={image} style={styles.image} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      margin: 5,
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 8,
    },
    selectedImageContainer: {
      borderColor: 'yellow',
      borderWidth: 5
    },
    image: {
      width: 200,
      height: 200
    },
  });

export default CelebBanner;