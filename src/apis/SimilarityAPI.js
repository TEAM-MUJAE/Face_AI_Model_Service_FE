import { requestImageFromAPI } from './SimilarityCommonAPI';
import { setSimilarityCelebData, setSimilarityOtherData, setSimilarityPeopleData } from '../features/similarityDataSlice';  

export function callGetCompareCelebAPI() {
    return async (dispatch, getState) => {
        try {
            const uploadImage = getState().compare.selectedFirstImage;
            
            const formData = new FormData();

            formData.append('file', {
                uri: uploadImage.uri,
                type: uploadImage.type,
                name: uploadImage.fileName
            });

            const response = await requestImageFromAPI('POST', '/upload', formData);

            // 스토어에 응답 데이터 저장
            const responseData = response.data;
            dispatch(setSimilarityCelebData(responseData));
            
        } catch (error) {
            if (error.response) {
                console.log('요청이 이루어졌으며 서버에서 응답을 받았으나 응답의 상태 코드가 2xx 범위가 아닙니다...');
                throw error;
            } else if (error.request) {
                throw error;
            } else {
                throw error;
            }
            console.log('설정된 에러 : ', error.config);
        }
    }
}

export function callGetCompareOtherAPI() {
    return async (dispatch, getState) => {
        try {
            const uploadFirstImage = getState().compare.selectedFirstImage;
            const uploadSecondImage = getState().compare.selectedSecondImage;
            
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

            const response = await requestImageFromAPI('POST', '/other', formData);

            // 스토어에 데이터 저장
            const responseData = response.data;
            dispatch(setSimilarityOtherData(responseData));
            
        } catch (error) {
            if (error.response) {
                console.log('요청이 이루어졌으며 서버에서 응답을 받았으나 응답의 상태 코드가 2xx 범위가 아닙니다...');
                throw error;
            } else if (error.request) {
                throw error;
            } else {
                throw error;
            }
        }
    }
}

export function callGetComparePeopleAPI() {
    return async (dispatch, getState) => {
        try {
            const uploadFirstImage = getState().compare.selectedFirstImage;
            const uploadSecondImage = getState().compare.selectedSecondImage;
            const uploadThirdImage = getState().compare.selectedThirdImage;
            
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

            const response = await requestImageFromAPI('POST', '/people', formData);

            // 스토어에 데이터 저장
            const responseData = response.data;
            dispatch(setSimilarityPeopleData(responseData));
            
        } catch (error) {
            if (error.response) {
                console.log('요청이 이루어졌으며 서버에서 응답을 받았으나 응답의 상태 코드가 2xx 범위가 아닙니다...');
                throw error;
            } else if (error.request) {
                throw error;
            } else {
                throw error;
            }
        }
    }
}
