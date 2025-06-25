import axios from "axios";


const instance = axios.create({
    baseURL: 'https://reqres.in',
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
});


instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        console.log('API error response:', error.response);
        return Promise.reject(error);
    }
);

export default instance;