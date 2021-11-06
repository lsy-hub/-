import axios from 'axios';

const host = 'http://120.76.247.5:2003'

const instance = axios.create({
    // baseURL: 基础路径
    baseURL: host + '/api'
})

instance.interceptors.request.use(function (config) {
    let userInfo = localStorage.getItem('userInfo')
    try {
        userInfo = JSON.parse(userInfo) || {}
    } catch (err) {
        userInfo = {}
    }
    if (userInfo.authorization) {
        config.headers.Authorization = userInfo.authorization
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.host = host

export default instance