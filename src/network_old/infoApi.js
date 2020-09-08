import {post, get} from "./request";
import { INFO_URL } from "./baseUrl";

export function proInfo() {
  return get(`${INFO_URL}home/multidata`);
}