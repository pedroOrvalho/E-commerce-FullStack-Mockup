import axios from "axios";

import { getUserInfo } from "../slices/user";
import { AppDispatch } from "../store";

export function fetchUserById(id: string | null) {
  const token = localStorage.getItem("userToken");
  const url = `http://localhost:4000/users/${id}`;

  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    dispatch(getUserInfo(data));
  };
}
