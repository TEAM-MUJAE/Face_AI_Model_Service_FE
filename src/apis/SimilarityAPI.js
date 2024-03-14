import { requestImageFromAPI } from './CommonAPI';
import { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } from '../features/similarityDataSlice'; 



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

            console.log('이건가? : ', formData);

            const response = await requestImageFromAPI('POST', '/upload', formData);

            const responseData = response.data;
            const keys = Object.keys(response);

            console.log('keys : ', keys);

            dispatch(setSimilarityCelebData(responseData));
            
        } catch (error) {
            console.error('요청 에러 메시지 :', error.message);
            console.error('요청 에러 스택:', error.stack);
        }
    }
}
