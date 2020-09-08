import axios from 'axios'
const TAG = 'http';



const requestInterceptorConfig = config => {
  config.headers['token'] = 'testtoken';
  // console.log('inte config', config);
  return config;
}
const requestInterceptorError = err => {
  console.log(TAG, err);
  return Promise.reject(err);
}

const responseInterceptor = res => {
  // console.log('inte res', res);
  //TODO 小程序下会报错???
  // return res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res);
  return res.data;
}
const responseInterceptorError = err => {
  console.log(TAG, err);
  return Promise.reject(err);
}


/**
 * 注册拦截器
 * @param {axios} axiosInstance 
 */
function registerInterceptor(axiosInstance) {
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  axiosInstance.interceptors.request.use(requestInterceptorConfig, requestInterceptorError);

  // 2.2.响应拦截
  axiosInstance.interceptors.response.use(responseInterceptor, responseInterceptorError);
}

/**
 * 小程序环境和浏览器不一致导致的
 * 需要用adapter处理小程序的网络请求
 * @param {axios} axiosInstance 
 */
function wxAdapter(axiosInstance) {
  axiosInstance.defaults.adapter = config => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.baseURL ? config.baseURL + config.url : config.url,
        method: config.method,
        data: config.data,
        header: config.headers,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      })
    })
  }
}



/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
function encodeSearchParams(obj = {}) {
  const params = []

  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined') {
      value = ''
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    params.push([key, encodeURIComponent(value)].join('='))
  })

  return params.join('&')
}



// 1.创建axios的实例
const instance = axios.create({
  // baseURL: baseURL,
  timeout: 5000
});
registerInterceptor(instance);
wxAdapter(instance);

export function post(url, params = {}, header = {}) {

  // 3.发送真正的网络请求
  return instance.post(url, params, { headers: header })
}

export function get(url, params = {}, header = {}) {
  return instance.get(`${url}?${encodeSearchParams(params)}`, { headers: header })
}


