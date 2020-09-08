import axios from 'axios'


export function Request(baseUrl, interceptor, wxAdapter){
  this.instance;

  this.baseUrl = baseUrl;
  this.interceptor = interceptor;
  this.wxAdapter = wxAdapter;

}

Request.prototype = {
  constructor : Request,
  newInstance(){
    // 1.创建axios的实例
    this.instance = axios.create({
      baseURL: this.baseUrl,
      timeout: 5000
    });
    if(this.interceptor){
      this.interceptor(this.instance);
    }
    if(this.wxAdapter){
      this.wxAdapter(this.instance);
    }
  },

 post(url, params = {}, header = {}) {

    // 3.发送真正的网络请求
    return this.instance.post(url, params, { headers: header })
  },
  
  get(url, params = {}, header = {}) {
    return  this.instance.get(`${url}?${encodeSearchParams(params)}`, { headers: header })
  },
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