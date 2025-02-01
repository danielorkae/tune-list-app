import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopMusics = createAsyncThunk(
  "music/fetchTopMusics",
  async () => {
    const response = await fetch("https://api.deezer.com/chart");
    const data = await response.json();
    return data.tracks.items.map((item: any) => ({
      id: item.track.id,
      title: item.track.name,
      artists: item.track.artists.map((artist: any) => artist.name),
    }));
  }
);
