import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Order } from "../../types/type";

type InitialState = {
  orderList: Order[];
  order: Order;
};

const initialState: InitialState = {
  orderList: [],
  order: {
    _id: "",
    productList: [],
    createdAt: "",
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderListByUserId: (state, { payload }: PayloadAction<Order[]>) => {
      state.orderList = payload;
    },
    getOrderByUserId: (state, { payload }: PayloadAction<Order>) => {
      state.order = payload;
    },
  },
});

export const { getOrderListByUserId, getOrderByUserId } = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
