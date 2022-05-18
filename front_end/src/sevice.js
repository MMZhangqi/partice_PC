import axios from 'axios'
 
const sevice = axios.create({
    // baseURL: 'http://rap2api.taobao.org/app/mock/301444',
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    },
    timeout: 1000
})

// 请求拦截
sevice.interceptors.request.use(
    (config) => {
    // token认证写在这里
    return config;
    },
    (err) => {
    Promise.reject(err);
    }
)
// 响应拦截
sevice.interceptors.response.use(
    (config) => {
    return config;
    },
    (err) => {
    Promise.reject(err);
    }
)

export default sevice