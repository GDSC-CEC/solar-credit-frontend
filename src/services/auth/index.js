import { get, post, put, deleteRequest } from "../../utils/api";

const login = (data) => {
  const response = post("/login", data);
  return response;
};

const signup = (data) => {
  const response = post("/signup", data);
  return response;
};
