import { Music } from "@/app/domain/music";
import { Playlist } from "@/app/domain/playlist";
import { createSlice } from "@reduxjs/toolkit";
import { fetchDeezerChart, fetchPlaylistMusics } from "./music.thunk";

interface MusicState {
  trendingMusics: Music[];
  topPlaylists: Playlist[];
  loadingTrendingMusics: boolean;
  loadingTopPlaylists: boolean;
  error?: string;
}

export const initialState: MusicState = {
  trendingMusics: [],
  topPlaylists: [],
  loadingTrendingMusics: false,
  loadingTopPlaylists: false,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDeezerChart.pending, (state) => {
      state.trendingMusics = [];
      state.topPlaylists = [];
      state.loadingTrendingMusics = true;
    });

    builder.addCase(fetchDeezerChart.fulfilled, (state, action) => {
      state.trendingMusics = action.payload.trendingMusics;
      state.topPlaylists = action.payload.topPlaylists;
      state.loadingTrendingMusics = false;
    });

    builder.addCase(fetchDeezerChart.rejected, (state, action) => {
      state.error = action.error.message ?? "An error occurred";
      state.loadingTrendingMusics = false;
    });

    builder.addCase(fetchPlaylistMusics.pending, (state) => {
      state.loadingTopPlaylists = true;
    });

    builder.addCase(fetchPlaylistMusics.fulfilled, (state, action) => {
      const playlist = state.topPlaylists.find(
        (playlist) => playlist.id === action.payload.playlistId
      );

      if (playlist) {
        playlist.musics = action.payload.musics;
      }

      state.loadingTopPlaylists = false;
    });

    builder.addCase(fetchPlaylistMusics.rejected, (state, action) => {
      state.error = action.error.message ?? "An error occurred";
      state.loadingTopPlaylists = false;
    });
  },
});

export const {} = musicSlice.actions;
export default musicSlice.reducer;
