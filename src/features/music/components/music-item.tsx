import { Music } from "@/app/domain/music";
import { Avatar, Button } from "@chakra-ui/react";
import { HeartIcon, User2Icon } from "lucide-react";
import "./music-item.scss";

type MusicItemProps = {
  music: Music;
  isFavorite: boolean;
  onFavoriteClick: (music: Music) => void;
};

export function MusicItem({ music, isFavorite, onFavoriteClick }: MusicItemProps) {
  const favoriteClickHandler = () => {
    onFavoriteClick(music);
  }
  
  return (
    <div className="music-item">
      <Avatar className="music-item__cover" src={music.cover} rounded={'sm'} size="lg" />
      <div className="music-item__info">
        <div className="music-item__title">{music.title}</div>
        <div className="music-item__artist">
          <User2Icon size="1em" /> {music.artist}
        </div>
      </div>
      <Button
        className={`music-item__favorite`}
        variant="ghost"
        onClick={() => favoriteClickHandler()} 
      >
        <HeartIcon
          className={`music-item__favorite__icon ${isFavorite ? 'music-item__favorite__icon--favorited' : ''}`}
        />
      </Button>
    </div>
  );
}
