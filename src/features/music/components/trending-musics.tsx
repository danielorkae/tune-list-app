import { Music } from "@/app/domain/music";
import { Button, Heading } from "@chakra-ui/react";
import { MusicIcon, PlayIcon } from "lucide-react";
import "./trending-musics.scss";

export function TrendingMusicItem({ music }: { music: Music }) {
  return (
    <div
      className="trending-musics__item"
      style={{ backgroundImage: `url(${music.cover})` }}
    >
      <div className="trending-musics__item__overlay">
        <div className="trending-musics__item__info">
          <Heading as="h2" size="sm" className="trending-musics__item__title">
            {music.title}
          </Heading>
          <span>
            <MusicIcon size={"0.9em"} />
            <span className="trending-musics__item__artist">
              {music.artist}
            </span>
          </span>
        </div>
        <Button className="trending-musics__item__play" variant="ghost">
          <PlayIcon />
        </Button>
      </div>
    </div>
  );
}

export function TrendingMusics({ musics }: { musics: Music[] }) {
  return (
    <div className="trending-musics">
      <Heading as="h1" className="trending-musics__title">
        Tendência agora
      </Heading>

      <div className="trending-musics__list">
        {musics.map((music) => (
          <TrendingMusicItem key={music.id} music={music} />
        ))}
      </div>
    </div>
  );
}
