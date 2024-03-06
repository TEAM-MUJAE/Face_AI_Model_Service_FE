// Code to request image from the router's fastAPI and execute Python logic
import { requestImageFromAPI } from './CommonAPI';
import { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } from '../features/similaritySlice'; 

export function callGetCompareCelebAPI() {
    console.log("왔니?")
    return async (dispatch, getState) => {
        console.log('callGetCompareCelebAPI 호출됨!');
        try {
            const selectedImage = getState().firstCompare.selectedImage;
            const formData = new FormData();
            formData.append('file', {
                uri: selectedImage.uri,
                type: selectedImage.type,
                name: selectedImage.fileName
            });
            const response = await requestImageFromAPI('POST', '/upload', formData);

            console.log('comp_celeb.py의 응답결과 : ', response);

            dispatch(setSimilarityCelebData(response));
            
        } catch (error) {
            console.error('파이썬 로직 수행 관련 에러 :', error);
        }
    }
}
