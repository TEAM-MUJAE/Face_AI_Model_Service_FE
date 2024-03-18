import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';


import { setSelectedImageIndex } from '../../features/secondCompareSlice';
import { setSelectedImage } from '../../features/secondCompareSlice';


function CelebBanner() {

    const selectedImage = useSelector(state => state.secondCompare.selectedImageIndex);
    const dispatch = useDispatch();
    

    const bannerImages = [
        'https://i.namu.wiki/i/HLmwkbKN1vCKfz6q5lCRAKUt5x0Ml27BLXkqKNdoQbsAHxkVnN2isT668AQDGXnSPhDTUkdDyB0obrmnis0JURl6sTqJYJW2okgDJmbJ_OSELJnW7gyuBpxAwzALTWzxEzYT0ZdQ7EfX94lCJfVg2g.webp',
        'https://i.namu.wiki/i/G8RdO4Nq7YIHG5T4xml3CzOMElmUdS1ozzqw309Rtpu7nB-dF_DOIJRo_mGAhRqOXBKMsMH8dD3xGCPkAJ6b2TxoZEBjULkgZNxXXMgIEn7hsH6DOkLGxlH-hhOf5kD_Gr1g9GijmenzC40WB5Y70Q.webp',
        'https://i.namu.wiki/i/i8DJiIv555NzvusTR0btR5WQfSnPUIoewrKx5YfRqCPJVh8SwHAdIRlLUhiBs9D6ROvBX3RXUS0wxQoTz6YvmXSu4yB9zfSgFQQQDeI3FLu6LJZfrDa9LQTslPaZ4_iJAgkG9nZOy1k6r0ajMrl3bA.webp',
        'https://i.namu.wiki/i/Cz-ndgkoH6-A-P1qwtSCd9Y-BDSqQfOnIN2yLqL-AoZznAhotKb2oCgQPrfW5EJBYv0H5aszJGLVv_flbED6cUDqp1X_jWAKXohT_fuzNL9cjEIm8ITjuvBZUxs_xlA5mZ8UbkkvWiu2GbDcNn253Q.webp',
        'https://i.namu.wiki/i/RJPx_6-FRce4F08XNZwxuyYvxVfCYyrlZbcJ3c5vzy23jzr3nwwu_vqRBiVsDX3jboPdM9MPjrqTZpPbA1EAaXlwWzsn-Ec8t9yE3oWqHtBAIrb56mK2sgGAUhvsvujkTwYykiGzNId-HxBnqWTq_A.webp',
        'https://i.namu.wiki/i/HxA78OKhFljQ9aod50d8gPbjb5b1ybGIL6Kwy1YYInmpl2Ad254RV8BD1qiw7V5T9W2jDXKPJY3lGdiDadGa1cp2iwAJ_fa3nx7Sci_EF23IlUOvsGs1Jg2lRb1Q9m4S9joeqwPc7qMhsIkxnX_aqw.webp'


    ]

    const imagePressHandler = (image, index) => {
        console.log(`${index+1}번째 image banner clicked!`);
        dispatch(setSelectedImageIndex(index));
        dispatch(setSelectedImage(image))
    }

    return (
        <ScrollView horizontal>
            {bannerImages.map((image, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => imagePressHandler(image, index)}
                    style={[
                        styles.imageContainer,
                        selectedImage === index && styles.selectedImageContainer
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