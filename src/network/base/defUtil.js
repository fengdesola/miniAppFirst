const TAG = 'http';
let LOG_ON = false;
// LOG_ON = true;


/**
 * 注册拦截器
 * @param {axios} axiosInstance 
 */
export function interceptor(axiosInstance) {
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  axiosInstance.interceptors.request.use(config => {
    config.headers['token'] = 'testtoken';
    if(LOG_ON){
      console.log(TAG, 'intercept config', config);
    }
    return config;
  }, err => {
    console.log(TAG, err);
    return Promise.reject(err);
  });

  // 2.2.响应拦截
  axiosInstance.interceptors.response.use(res => {
    if(LOG_ON){
      console.log(TAG, 'intercept res', res);
    }
    return res.statusCode === 200 ? Promise.resolve(res.data) : Promise.reject(res);
  }, err => {
    console.log(TAG, err);
    return Promise.reject(err);
  });
}

/**
 * 小程序环境和浏览器不一致导致的
 * 需要用adapter处理小程序的网络请求
 * @param {axios} axiosInstance 
 */
export function wxAdapter(axiosInstance) {
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