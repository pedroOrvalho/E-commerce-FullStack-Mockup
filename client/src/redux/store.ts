import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/products";
import favoritesReducer from "./slices/favorites";
import cartReducer from "./slices/cart";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
