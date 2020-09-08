import { Request } from "../base/request";
import { INFO_URL } from "../base/baseUrl";
import { interceptor, wxAdapter } from "../base/defUtil";


const request = new Request(INFO_URL, interceptor, wxAdapter);
request.newInstance();

// export function login(username, password) {
//   return request.get(`ip`, {username, password});
// }
export function proInfo() {
  return request.get('home/multidata');
}




