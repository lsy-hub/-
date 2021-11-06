import axios from 'axios';

const host = 'http://120.76.247.5:2003'

const instance = axios.create({
    // baseURL: 基础路径
    baseURL: host+'/api'
})

instance.host = host

export default instance