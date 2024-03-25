import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { setSelectedImageIndex, setSelectedSecondImage } from '../../features/compareSlice';




function CelebBanner() {

    const selectedImageIndex = useSelector(state => state.compare.selectedImageIndex);
    const dispatch = useDispatch();
    

    const bannerImages = [
        'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/05/27/2f3e2b6d-6921-4698-aae4-ebfb81a3306c.jpg',
        'https://img.wowtv.co.kr/wowtv_news/dnrs/20211124/2021112408352909305d3244b4fed58141237161.jpg',
        'https://dimg.donga.com/wps/NEWS/IMAGE/2023/06/13/119750801.2.jpg',
        'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/04/06/1f35c18a-a42a-4452-a879-b332fe9345ae.jpg',
        'https://images.khan.co.kr/article/2022/09/21/news-p.v1.20220921.83f744edba564c94b000edf0bef72380_P1.jpg'
    ]

    const imagePressHandler = (image, index) => {
        console.log(`${index+1}번째 image banner clicked!`);
        dispatch(setSelectedImageIndex(index));
        dispatch(setSelectedSecondImage(image))
    }

    return (
        <ScrollView horizontal>
            {bannerImages.map((image, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => imagePressHandler(image, index)}
                    style={[
                        styles.imageContainer,
                        selectedImageIndex === index && styles.selectedImageContainer
                    ]}
                >
                    <Image source={{ uri: image }} style={styles.image} />
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
      width: 150,
      height: 150
    },
  });

export default CelebBanner;