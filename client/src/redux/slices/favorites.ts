import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Favorite } from "../../types/type";

type InitialState = {
  favoritesList: Favorite[];
};

const initialState: InitialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addOrRemoveFromFavorites: (state, { payload }: PayloadAction<Favorite>) => {
      const isAlreadyFavorite = state.favoritesList.some((favorite) => favorite._id === payload._id);
      if (isAlreadyFavorite) {
        const newFavoritesList = state.favoritesList.filter((favorite) => favorite._id !== payload._id);
        state.favoritesList = newFavoritesList;
      } else {
        state.favoritesList.push(payload);
      }
    },
  },
});

export const { addOrRemoveFromFavorites } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
