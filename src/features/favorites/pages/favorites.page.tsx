import { Music } from "@/app/domain/music";
import { AppLayout } from "@/components/layouts/app.layout";
import { MusicItem } from "@/features/music/components/music-item";
import { RootState } from "@/store";
import { Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../favorites.slice";
import "./favorites.page.scss";

export function FavoritesPage() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const onFavoriteClickHandler = (music: Music) => {
    dispatch(removeFavorite(music));
  };

  return (
    <AppLayout className="favorites-page">
      <Heading className="favorites-page__title">Suas Favoritas</Heading>

      <div className="favorites-page__list">
        {favorites.length === 0 && (
          <p className="favorites-page__empty">Nenhuma música favorita</p>
        )}

        {favorites.map((favorite) => (
          <MusicItem
            music={favorite}
            isFavorite={true}
            onFavoriteClick={onFavoriteClickHandler}
          />
        ))}
      </div>
    </AppLayout>
  );
}
