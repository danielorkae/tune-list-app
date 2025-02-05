import { Playlist as PlaylistType } from "@/app/domain/playlist";
import { Heading } from "@chakra-ui/react";
import { MusicItem } from "./music-item";
import "./playlist.scss";

export function Playlist({ playlist }: { playlist: PlaylistType }) {
  return (
    <div className="playlist">
      <Heading size="lg" className="playlist__title">
        {playlist.title}
      </Heading>

      <div className="playlist__musics">
        {playlist.musics.map((music) => (
          <MusicItem key={music.id} music={music} />
        ))}
      </div>
    </div>
  );
}
