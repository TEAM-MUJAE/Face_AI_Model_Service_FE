import axios from 'axios';

const baseURL = 'http://192.168.0.25:8000';

export const requestRegisterFromAPI = async (method, url, data) => {
    console.log('requestRegisterFromAPI 호출됨!');

    console.log('method : ', method);
    console.log('baseURL : ', baseURL);
    console.log('url : ', url);
    console.log('엔드포인트? : ', `${baseURL}${url}`);
    console.log('data : ', data);
    try {
        console.log("어디까지 왔을까")
        const response = await axios({
            method,
            url: `${baseURL}${url}`,
            data
        });
        return response;
    } catch (error) {     
        throw error;
    }
}



