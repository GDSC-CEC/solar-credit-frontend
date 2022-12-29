import { get, post, put, deleteRequest } from "../../utils/api";

const getProductList = () => {
  const response = get("/product");
  return response;
};

const updateProductItem = (data) => {
  const response = put("/product", data);
  return response;
};

const addProductItem = (data) => {
  const response = post("/product", data);
  return response;
};

const deleteProduct = (id) => {
  const response = deleteRequest(`/product/${id}`);
  return response;
};
