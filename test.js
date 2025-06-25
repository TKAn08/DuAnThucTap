const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
    headers: {
        'x-api-key': 'reqres-free-v1'
    }
});

instance.interceptors.response.use(
    response => response.data,
    error => {
        console.log('API error response:', error.response);
        return Promise.reject(error);
    }
);

instance.get('/users/2')
    .then(data => console.log('Your Data:', data))
    .catch(error => console.error('Error:', error));