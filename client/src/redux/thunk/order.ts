import axios from "axios";

import { getOrderListByUserId } from "../slices/order";
import { AppDispatch } from "../store";

export function fetchOrderListByUserId(userId: string | null) {
  const token = localStorage.getItem("userToken");

  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`http://localhost:4000/orders/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    dispatch(getOrderListByUserId(data));
  };
}
