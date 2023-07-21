import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/type";

type InitialState = {
  cart: CartProduct[];
};

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartProduct>) => {
      const isAlreadyInCartIndex = state.cart.findIndex((cartProduct) => cartProduct._id === payload._id);
      if (isAlreadyInCartIndex !== -1) {
        state.cart[isAlreadyInCartIndex].quantity += 1;
      } else {
        state.cart.push(payload);
      }
    },
    removeFromCart: (state, { payload }: PayloadAction<CartProduct>) => {
      const newCart = state.cart.filter((cartItem) => cartItem._id !== payload._id);
      state.cart = newCart;
    },
    updateProductQty: (state, { payload }: PayloadAction<CartProduct>) => {
      const productIndex = state.cart.findIndex((cartItem) => cartItem._id === payload._id);
      state.cart[productIndex].quantity = payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateProductQty } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
