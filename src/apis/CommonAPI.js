import axios from 'axios';
// import RNFetchBlob from 'react-native-fetch-blob';

// CommonAPI.js

const baseURL = 'http://192.168.0.25:8000';


export const requestImageFromAPI = async (method, url, data) => {
    console.log('requestImageFromAPI 호출됨!');

    console.log('method : ', method);
    console.log('url : ', url);
    console.log('data : ', data);
    try {
        console.log("어디까지 왔을까")
        const response = await axios({
            method,
            url: `${baseURL}${url}`,
            data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log('Response from API: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error requesting API: ', error.stack);
        throw error;
    }
}
// export const requestImageFromAPI = async (method, url) => {

    

//     console.log('requestImageFromAPI 호출됨!');
//     console.log('이미지 파일 : ', imageFile);
//     const formData = new FormData();
//     formData.append('image', {
//         uri: imageFile.uri,
//         type: imageFile.type,
//         name: 'image.jpg'
//     });

//     try {
//         const response = await RNFetchBlob.fetch(method, `${baseURL}${url}`, {
//             'Content-Type' : 'multipart/form-data',
//         }, formData);

//         console.log('Response from API: ', response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error requesting image from API: ', error);
//         throw error;
//     }
// }
