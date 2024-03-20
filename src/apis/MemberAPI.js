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
            
            console.log('이건가? : ', memberData);

            // 스토어에 데이터 저장
            const response = await requestRegisterFromAPI('POST', '/register', memberData);
            console.log('response : ', response);
            const responseData = response.data;
            console.log('responseData : ', responseData);
            dispatch(setRegisterResData(responseData));
            
        } catch (error) {
            console.error('요청 에러 메시지 :', error.message);
            console.error('요청 에러 스택:', error.stack);
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
            console.error('요청 에러 메시지 :', error.message);
            console.error('요청 에러 스택:', error.stack);
        }
    }
}
