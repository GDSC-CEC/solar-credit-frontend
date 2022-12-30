import axios from "axios";
import _ from "lodash";
import { cookie } from "./cookie";
import { BASE_URL, USER_TOKEN } from "../constants/common.constants";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const authHeader = () => {
  let token = cookie.get(USER_TOKEN);
  return {
    Authentication: `Bearer ${token}`,
  };
};

const apiServices = axios.create({});

const getHeaders = (auth) => {
  let headers = defaultHeaders;
  if (auth) {
    headers = { ...headers, ...authHeader() };
  }
};

const url = (path, params) => {
  const sections = path.split(":");
  const sectionsWithParams = sections.map(section =>
    _.startsWith(section, "/") ? section : params[section]
  );
  const pathWithParams = sectionsWithParams.join("");
  return BASE_URL + pathWithParams;
};

export const get = (path, params) => {
  apiServices.get(url(path, params), { params });
};
export const post = (path, params) => {
  apiServices.post(url(path, params), params);
};
export const put = (path, params) => {
  apiServices.put(url(path, params), params);
};
export const deleteRequest = (path, params) => {
  apiServices.delete(url(path, params), { params });
};

apiServices.interceptors.request.use((request) => {
  request.headers = getHeaders();
  return request;
});

apiServices.interceptors.response.use(response => { return response }, error => { return error });
