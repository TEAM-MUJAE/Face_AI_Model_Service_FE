import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Dimensions, Alert } from 'react-native';
import { setFirstImageUrl, setSelectedFirstImage } from '../../features/compareSlice';
import { useDispatch, useSelector } from 'react-redux';


function FirstInsertURL() {

    const screenWidth = Dimensions.get('window').width;
    const componentWidth = screenWidth - 20;

    const dispatch = useDispatch();

    const imageUrl = useSelector(state => state.compare.firstImageUrl);

    console.log('imageUrl1 : ', imageUrl);

    const imageUrlHandler = () => {
        console.log('imageUrl2 : ', imageUrl);

        const fileExtension = imageUrl.split('.').pop().toLowerCase();

        const validExtensions = ['jpg', 'jpeg', 'png'];

        if(validExtensions.includes(fileExtension)) {
            dispatch(setSelectedFirstImage(imageUrl));
        } else {
            Alert.alert('알림', '이미지를 확인했지만 지원하는 이미지 형식이 아닙니다. jpg, jpeg, png 파일로 다시 시도 부탁드립니다.', [
                { text: '확인' }
            ]);
        }
        
    }
    return (
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'coral'
        }}>
            <TextInput
                style={
                    styles.input
                }
                onChangeText={ (text) => dispatch(setFirstImageUrl(text)) }
                value={ imageUrl }
                placeholder='.png  .jpg  .jpeg 로 끝나는 url 입력'
            />
            <TouchableOpacity onPress={imageUrlHandler} style={styles.checkButton}>
                <Text style={styles.checkButtonText}>url 적용</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
    },
    inputUrl: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        height: 60,
    },
    input: {
        flex: 1,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 15,
        borderWidth: 0,
    },
    checkButton: {
        width: 100,
        backgroundColor: '#6F50F8',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 10,
    },
    checkButtonText: {
        color: 'white',
    }
});

export default FirstInsertURL;