import axios from "axios";

import { getUserInfo } from "../slices/user";
import { AppDispatch } from "../store";
import { BASE_URL } from "../../Api";

export function fetchUserById(id: string | null, navigate: Function) {
  const token = localStorage.getItem("userToken");
  const url = `${BASE_URL}/users/${id}`;

  return (dispatch: AppDispatch) => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(getUserInfo(res.data));
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in ");
          navigate("/login");
          return;
        }
      });
  };
}
