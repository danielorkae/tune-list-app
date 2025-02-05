import { Music } from "@/app/domain/music";
import { Avatar, Button } from "@chakra-ui/react";
import { HeartIcon, User2Icon } from "lucide-react";
import { useState } from "react"; // Importado useState
import "./music-item.scss";

type MusicItemProps = {
  music: Music;
};

export function MusicItem({ music }: MusicItemProps) {
  const [isFavorited, setIsFavorited] = useState(false); // Estado para controle de favoritar

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

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
      >
        <HeartIcon
          className={`music-item__favorite__icon ${isFavorited ? 'music-item__favorite__icon--favorited' : ''}`}
          onClick={toggleFavorite} 
        />
      </Button>
    </div>
  );
}
