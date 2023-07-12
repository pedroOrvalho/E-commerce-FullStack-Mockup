import { getAllProducts, getProductById } from "../slices/products";
import { AppDispatch } from "../store";

const productsUrl = "http://localhost:4000/products";

export function fetchAllProducts() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productsUrl);
    const data = await response.json();
    dispatch(getAllProducts(data));
  };
}

export function fetchProductById(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`http://localhost:4000/products/${id}`);
    const data = await response.json();
    dispatch(getProductById(data));
  };
}
