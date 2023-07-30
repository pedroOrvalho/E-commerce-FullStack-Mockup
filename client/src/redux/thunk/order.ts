import axios from "axios";

import { getOrderById, getOrderListByUserId } from "../slices/order";
import { AppDispatch } from "../store";
import { BASE_URL } from "../../Api";

export function fetchOrderListByUserId(
  userId: string | null,
  token: string | null,
  navigate: Function
) {
  return (dispatch: AppDispatch) => {
    axios
      .get(`${BASE_URL}/orders/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getOrderListByUserId(res.data));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in ");
          navigate("/login");
        }
      });
  };
}

export function fetchOrderById(
  orderId: string | undefined,
  token: string | null,
  navigate: Function
) {
  return (dispatch: AppDispatch) => {
    axios
      .get(`${BASE_URL}/orders/detail/${orderId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getOrderById(res.data));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in ");
          navigate("/login");
        }
      });
  };
}
