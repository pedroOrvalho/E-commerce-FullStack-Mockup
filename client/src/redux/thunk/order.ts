import axios from "axios";

import { getOrderListByUserId } from "../slices/order";
import { AppDispatch } from "../store";

export function fetchOrderListByUserId(
  userId: string | null,
  navigate: Function
) {
  const token = localStorage.getItem("userToken");

  return (dispatch: AppDispatch) => {
    axios
      .get(`http://localhost:4000/orders/${userId}`, {
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
