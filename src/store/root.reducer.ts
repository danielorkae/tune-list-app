import { combineReducers } from "redux";

import favorites from "@/features/favorites/favorites.slice";
import music from "@/features/music/music.slice";

export const rootReducer = combineReducers({
  favorites,
  music,
});
