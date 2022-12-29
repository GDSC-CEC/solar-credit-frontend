import { get, post, put, deleteRequest } from "../../utils/api";

const getUserProfile = () => {
  const response = get("/user");
  return response;
};

const updateProfile = (data) => {
  const response = put("/user");
  return response;
};
