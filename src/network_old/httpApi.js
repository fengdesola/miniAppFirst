import {post, get} from "./request";
import { ACCOUNT_URL } from "./baseUrl";

export function login(username, password) {
  return get(`${ACCOUNT_URL}ip`, {username, password});
}
export function responseHeaders(freeform) {
  return post(`${ACCOUNT_URL}response-headers`, {freeform});
}
