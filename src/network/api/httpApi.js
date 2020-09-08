import { Request } from "../base/request";
import { ACCOUNT_URL } from "../base/baseUrl";
import { interceptor, wxAdapter } from "../base/defUtil";


const request = new Request(ACCOUNT_URL, interceptor, wxAdapter);
request.newInstance();

export function login(username, password) {
  return request.get(`ip`, {username, password});
}
export function loginOut(username) {
  return request.get(`user-agent`, {username});
}
export function responseHeaders(freeform) {
  return request.post(`response-headers`, {freeform});
}




