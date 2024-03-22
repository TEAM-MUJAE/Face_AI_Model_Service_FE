import { setLoginResData, setRegisterResData } from "../features/memberDataSlice";
import { requestRegisterFromAPI } from "./MemberCommonAPI";


export function callPostJoinAPI() {



    console.log("왔니?")
    return async (dispatch, getState) => {
        console.log('callPostJoinAPI 호출됨!');
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
            console.log('responseData : ', responseData);
            dispatch(setRegisterResData(responseData));
            
        } catch (error) {
            if (error.response) {
                console.log('요청이 이루어졌으며 서버에서 응답을 받았으나 응답의 상태 코드가 2xx 범위가 아닙니다...');
                console.log('응답 에러 :', error.response);
                console.log('응답 에러 데이터 :', error.response.data);
                const responseData = error.response.data;
                dispatch(setRegisterResData(responseData));
            } else if (error.request) {
                console.log('요청이 이루어졌으나 응답을 받지 못함... :', error.request);
            } else {
                console.log('요청을 보내지 못함... :', error.message);
            }
            console.log('설정된 에러 : ', error.config);
        }
    }
}

export function callPostLoginAPI() {
    return async (dispatch, getState) => {
        console.log('callPostLoginAPI 호출됨!');
        try {
            const userId = getState().login.idText
            const userPassword = getState().login.passwordText
            const memberData = {
                id: userId,
                pwd: userPassword
            };
            console.log('memberData : ', memberData);
            const response = await requestRegisterFromAPI('POST', '/login', memberData);
            console.log('response : ', response);
            const responseData = response.data;
            console.log('responseData : ', responseData);
            dispatch(setLoginResData(responseData));
        } catch (error) {
            if (error.response) {
                console.log('요청이 이루어졌으며 서버에서 응답을 받았으나 응답의 상태 코드가 2xx 범위가 아닙니다...');
                console.error('요청 에러 메시지 :', error.response.data);
                console.error('에러 응답 코드 :', error.response.status);
            } else if (error.request) {
                console.error('요청이 이루어졌으나 응답을 받지 못함... :', error.request);
            } else {
                console.error('요청을 보내지 못함... :', error.message);
            }
            console.log('설정된 에러 : ', error.config);
        }
    }
}
