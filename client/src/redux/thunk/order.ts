import axios from "axios";

import { getOrderById, getOrderListByUserId } from "../slices/order";
import { AppDispatch } from "../store";

const token = localStorage.getItem("userToken");
const userId = localStorage.getItem("_id");
export function fetchOrderListByUserId(navigate: Function) {
  return (dispatch: AppDispatch) => {
    axios
      .get(`http://localhost:4000/orders/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
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
  navigate: Function
) {
  return (dispatch: AppDispatch) => {
    axios
      .get(`http://localhost:4000/orders/detail/${orderId}`, {
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
