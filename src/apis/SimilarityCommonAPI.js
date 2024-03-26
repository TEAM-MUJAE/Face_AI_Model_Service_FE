import axios from 'axios';

const baseURL = 'http://43.201.132.221:8000';

export const requestImageFromAPI = async (method, url, data) => {
    try {
        const response = await axios({
            method,
            url: `${baseURL}${url}`,
            data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}



