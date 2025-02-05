import { Music } from "@/app/domain/music";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoritesState = {
  favorites: Music[];
};

export const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Music>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Music>) => {
      state.favorites = state.favorites.filter(
        (music) => music.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
