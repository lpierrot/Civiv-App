import axios from 'axios';

export const API = axios.create({
    baseURL: `https://www.googleapis.com/civicinfo/v2/representatives`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.key = 'AIzaSyC2qhfHJqJDSsQ9B9wjLjN6FtW8-jDeI8k';
    // config.params.address = 'zipcode'; 
    return config;
}, function (error) {
    return Promise.reject(error);
});