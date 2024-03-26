import { setLoginResData, setRegisterErrorMessages, setRegisterResData } from "../features/memberDataSlice";
import { requestRegisterFromAPI } from "./MemberCommonAPI";


export function callPostJoinAPI() {

    return async (dispatch, getState) => {
        try {
            const userId = getState().signup.idText
            const userPassword = getState().signup.passwordText
            const userName = getState().signup.nameText
            const userEmail = getState().signup.emailText
            const userPhone = getState().signup.phoneText

            const memberData = {
                id: userId,
                pwd: userPassword,
                name: userName,
                email: userEmail,
                phone: userPhone
            };

            // 스토어에 데이터 저장
            const response = await requestRegisterFromAPI('POST', '/register', memberData);
            const responseData = response.data;
            dispatch(setRegisterResData(responseData));
            
        } catch (error) {
            if (error.response) {
                console.log('요청이 이루어졌으며 서버에서 응답을 받았으나 응답의 상태 코드가 2xx 범위가 아닙니다...');
                const responseData = error.response.data.message;
                dispatch(setRegisterErrorMessages(responseData));
                throw error;
            } else if (error.request) {
                throw error;
            } else {
                throw error;
            }
        }
    }
}

export function callPostLoginAPI() {
    return async (dispatch, getState) => {
        try {
            const userId = getState().login.idText
            const userPassword = getState().login.passwordText
            const memberData = {
                id: userId,
                pwd: userPassword
            };
            const response = await requestRegisterFromAPI('POST', '/login', memberData);
            const responseData = response.data;
            dispatch(setLoginResData(responseData));
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
