import { Music } from "./music";

export interface Playlist {
  id: number;
  title: string;
  musics: Music[];
}
