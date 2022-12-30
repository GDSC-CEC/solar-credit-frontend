import { get, post, put, deleteRequest } from "../../utils/api";

export const login = async (data) => {
  const response = await post("/user/login", data);
  return response;
};

export const signup = (data) => {
  const response = post("/user", data);
  return response;
};
