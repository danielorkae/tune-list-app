import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopMusics = createAsyncThunk(
  "music/fetchTopMusics",
  async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.tracks.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      artist: item.artist.name,
      cover: item.album.cover,
      preview: item.preview,
      external_url: item.link,
      duration: item.duration,
    }));
  }
);
