import { Music } from "@/app/domain/music";
import { Playlist as PlaylistType } from "@/app/domain/playlist";
import { saveFavorites } from "@/features/favorites/favorites.service";
import {
  addFavorite,
  removeFavorite,
} from "@/features/favorites/favorites.slice";
import { RootState } from "@/store";
import { Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { MusicItem } from "./music-item";
import "./playlist.scss";

export function Playlist({ playlist }: { playlist: PlaylistType }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const isFavorite = (musicId: number) => {
    return favorites.some((music) => music.id === musicId);
  };

  const onFavoriteClickHandler = (music: Music) => {
    if (!isFavorite(music.id)) {
      dispatch(addFavorite(music));
    } else {
      dispatch(removeFavorite(music));
    }

    saveFavorites(favorites);
  };

  return (
    <div className="playlist">
      <Heading size="lg" className="playlist__title">
        {playlist.title}
      </Heading>

      <div className="playlist__musics">
        {playlist.musics.map((music) => (
          <MusicItem
            key={music.id}
            music={music}
            isFavorite={isFavorite(music.id)}
            onFavoriteClick={onFavoriteClickHandler}
          />
        ))}
      </div>
    </div>
  );
}
