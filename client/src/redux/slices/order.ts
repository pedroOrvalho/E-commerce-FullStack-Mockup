import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Order } from "../../types/type";

type InitialState = {
  orderList: Order[];
  order: Order;
  isLoading: boolean;
};

const initialState: InitialState = {
  orderList: [],
  order: {
    _id: "",
    productList: [],
    createdAt: "",
  },
  isLoading: true,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderListByUserId: (state, { payload }: PayloadAction<Order[]>) => {
      state.orderList = payload;
      state.isLoading = false;
    },
    getOrderById: (state, { payload }: PayloadAction<Order>) => {
      state.order = payload;
      state.isLoading = false;
    },
  },
});

export const { getOrderListByUserId, getOrderById } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
