import { Playlist } from "@/app/domain/playlist";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDeezerChart = createAsyncThunk(
  "music/fetchDeezerChart",
  async (_, { dispatch }) => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const trendingMusics = response.data.tracks.data.slice(0, 10).map((item: any) => ({
      id: item.id,
      title: item.title,
      artist: item.artist.name,
      cover: item.album.cover_big,
      preview: item.preview,
      external_url: item.link,
      duration: item.duration,
    }));

    const topPlaylists = response.data.playlists.data.slice(0, 5).map(
      (item: any): Playlist => ({
        id: item.id,
        title: item.title,
        musics: [],
      })
    );

    topPlaylists.forEach((playlist: Playlist) => {
      dispatch(fetchPlaylistMusics(playlist.id));
    });

    return {
      trendingMusics,
      topPlaylists,
    };
  }
);

export const fetchPlaylistMusics = createAsyncThunk(
  "music/fetchPlaylistMusics",
  async (playlistId: number) => {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${playlistId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const musics = response.data.tracks.data.slice(0, 10).map((item: any) => ({
      id: item.id,
      title: item.title,
      artist: item.artist.name,
      cover: item.album.cover_medium,
      preview: item.preview,
      external_url: item.link,
      duration: item.duration,
    }));

    return {
      playlistId,
      musics,
    };
  }
);
