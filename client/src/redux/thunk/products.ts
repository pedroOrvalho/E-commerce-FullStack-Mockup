import { BASE_URL } from "../../Api";
import { getAllProducts, getProductById } from "../slices/products";
import { AppDispatch } from "../store";

export function fetchAllProducts() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    dispatch(getAllProducts(data));
  };
}

export function fetchProductById(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    dispatch(getProductById(data));
  };
}
