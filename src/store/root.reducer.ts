import { combineReducers } from "redux";

import music from "@/features/music/music.slice";

export const rootReducer = combineReducers({
  music,
});
