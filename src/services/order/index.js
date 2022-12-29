import { get, post, put, deleteRequest } from "../../utils/api";

const getOrderList = () => {
  const response = get("/order");
  return response;
};

const updateOrderItem = (data) => {
  const response = put("/order");
  return response;
};
