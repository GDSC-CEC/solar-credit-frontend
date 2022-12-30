import { get, post, put, deleteRequest } from "../../utils/api";

export const getProductList = () => {
  const response = get("/product");
  return response;
};

const updateProductItem = (data) => {
  const response = put("/product", data);
  return response;
};

export const addProductItem = (data) => {
  const response = post("/product", data);
  return response;
};

export const getProductById = (id) => {
  const response = get(`/product/search`, { id });
  return response;
}

const deleteProduct = (id) => {
  const response = deleteRequest(`/product/${id}`);
  return response;
};
