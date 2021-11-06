import axios from 'axios';

const host = 'http://localhost:8081'

const instance = axios.create({
    // baseURL: 基础路径
    baseURL: host
})

instance.host = host

export default instance