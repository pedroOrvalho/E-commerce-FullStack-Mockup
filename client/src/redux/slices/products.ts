import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
  productsList: Product[];
  product: Product;
  isLoading: boolean;
};

const initialState: InitialState = {
  productsList: [],
  product: {
    _id: "",
    title: "",
    description: "",
    category: "",
    price: 0,
    material: [],
    color: "",
    image: [],
  },
  isLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.productsList = action.payload;
      state.isLoading = false;
    },
    getProductById: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getAllProducts, getProductById } = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
