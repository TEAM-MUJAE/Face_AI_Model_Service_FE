import axios from 'axios';


import { customAxios, requestImageFromAPI } from './CommonAPI';
import { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } from '../features/similaritySlice'; 



export function callGetCompareCelebAPI() {
    console.log("왔니?")
    return async (dispatch, getState) => {
        console.log('callGetCompareCelebAPI 호출됨!');
        // try {
            const selectedImage = getState().firstCompare.selectedImage;
            
            const formData = new FormData();
            formData.append('file', {
                uri: selectedImage.uri,
                type: selectedImage.type,
                name: selectedImage.fileName
            });

            // const file1 = formData._parts[0];
            // const file2 = formData._parts[0][1];

            console.log('이건가? : ', formData);
            // console.log('요건가? : ', file1);
            // console.log('저건가? : ', file2);

            
            // const response = await axios.post(
            //     'http://127.0.0.1:8000/upload', formData,
            //     {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }
            // );

            // await customAxios()
            //     .post('/upload', formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         },
            //     })
            //     .then((response) => {
            //         console.log('response : ', response);
            //         dispatch(setSimilarityCelebData(response));
            //     })

            const response = await requestImageFromAPI('POST', '/upload', formData);

            console.log('comp_celeb.py의 응답결과 : ', response);

            dispatch(setSimilarityCelebData(response));
            
        // } catch (error) {
        //     console.error('요청 에러 메시지 :', error.message);
        //     console.error('요청 에러 스택:', error.stack);
        // }
    }
}
