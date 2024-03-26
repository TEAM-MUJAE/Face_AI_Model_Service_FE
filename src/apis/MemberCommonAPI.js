import axios from 'axios';

const baseURL = 'http://43.201.132.221:9000';

export const requestRegisterFromAPI = async (method, url, data) => {
    try {
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



