import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../types/type";

type InitialState = {
  user: User;
};

const initialState: InitialState = {
  user: {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfo: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
  },
});

export const { getUserInfo } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
