import { requestImageFromAPI } from './CommonAPI';
import { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } from '../features/similarityDataSlice';  

export function callGetCompareCelebAPI() {
    console.log("왔니?")
    return async (dispatch, getState) => {
        console.log('callGetCompareCelebAPI 호출됨!');
        try {
            const uploadImage = getState().firstCompare.selectedImage;
            
            const formData = new FormData();

            formData.append('file', {
                uri: uploadImage.uri,
                type: uploadImage.type,
                name: uploadImage.fileName
            });

            console.log('이건가? : ', formData);

            const response = await requestImageFromAPI('POST', '/upload', formData);

            // 스토어에 데이터 저장
            const responseData = response.data;
            dispatch(setSimilarityCelebData(responseData));
            
        } catch (error) {
            console.error('요청 에러 메시지 :', error.message);
            console.error('요청 에러 스택:', error.stack);
        }
    }
}

export function callGetCompareOtherAPI() {
    return async (dispatch, getState) => {
        console.log('callGetCompareOtherAPI 호출됨!');
        try {
            const uploadFirstImage = getState().firstCompare.selectedImage;
            const uploadSecondImage = getState().secondCompare.selectedImage;
            
            const formData = new FormData();

            formData.append('file1', {
                uri: uploadFirstImage.uri,
                type: uploadFirstImage.type,
                name: uploadFirstImage.fileName
            });

            formData.append('file2', {
                uri: uploadSecondImage.uri,
                type: uploadSecondImage.type,
                name: uploadSecondImage.fileName
            });

            console.log('이건가? : ', formData);

            const response = await requestImageFromAPI('POST', '/other', formData);

            // 스토어에 데이터 저장
            const responseData = response.data;
            dispatch(setSimilarityOtherData(responseData));
            
        } catch (error) {
            console.error('요청 에러 메시지 :', error.message);
            console.error('요청 에러 스택:', error.stack);
        }
    }
}

export function callGetComparePeopleAPI() {
    return async (dispatch, getState) => {
        console.log('callGetComparePeopleAPI 호출됨!');
        try {
            const uploadFirstImage = getState().firstCompare.selectedImage;
            const uploadSecondImage = getState().secondCompare.selectedImage;
            const uploadThirdImage = getState().thirdCompare.selectedImage;
            
            const formData = new FormData();

            formData.append('file1', {
                uri: uploadFirstImage.uri,
                type: uploadFirstImage.type,
                name: uploadFirstImage.fileName
            });
            formData.append('file2', {
                uri: uploadSecondImage.uri,
                type: uploadSecondImage.type,
                name: uploadSecondImage.fileName
            });
            formData.append('file3', {
                uri: uploadThirdImage.uri,
                type: uploadThirdImage.type,
                name: uploadThirdImage.fileName
            });

            console.log('이건가? : ', formData);

            const response = await requestImageFromAPI('POST', '/people', formData);

            // 스토어에 데이터 저장
            const responseData = response.data;
            dispatch(setSimilarityPeopleData(responseData));
            
        } catch (error) {
            console.error('요청 에러 메시지 :', error.message);
            console.error('요청 에러 스택:', error.stack);
        }
    }
}
