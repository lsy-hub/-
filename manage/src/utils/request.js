import axios from 'axios';

const host = '/api'

const instance = axios.create({
    // baseURL: 基础路径
    baseURL: host
})

instance.host = host

export default instance
