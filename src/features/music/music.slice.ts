import { Music } from "@/app/domain/music";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTopMusics } from "./music.thunk";

interface MusicState {
  musics: Music[];
  loading: boolean;
  error?: string;
}

export const initialState: MusicState = {
  musics: [],
  loading: false,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setMusics(state, action: PayloadAction<Music[]>) {
      state.musics = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopMusics.pending, (state) => {
      state.musics = [];
      state.loading = true;
    });

    builder.addCase(fetchTopMusics.fulfilled, (state, action) => {
      state.musics = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchTopMusics.rejected, (state, action) => {
      state.error = action.error.message ?? "An error occurred";
      state.loading = false;
    });
  },
});

export const { setMusics } = musicSlice.actions;
export default musicSlice.reducer;
