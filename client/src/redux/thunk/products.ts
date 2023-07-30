import { getAllProducts, getProductById } from "../slices/products";
import { AppDispatch } from "../store";

export function fetchAllProducts() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch("https://localhost:4000/products");
    const data = await response.json();
    dispatch(getAllProducts(data));
  };
}

export function fetchProductById(id: string | undefined) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(`https://localhost:4000/products/${id}`);
    const data = await response.json();
    dispatch(getProductById(data));
  };
}
