import { Music } from "@/app/domain/music";
import { Avatar } from "@/components/ui/avatar";
import { User2Icon } from 'lucide-react';

type MusicItemProps = {
  music: Music;
};

export function MusicItem({ music }: MusicItemProps) {
  return (
    <div className="flex items-center">
      <Avatar src={music.cover} shape="rounded" size="lg" />
      <div className="flex flex-col items-start ml-2">
        <div className="text-lg font-semibold">{music.title}</div>
        <div className="flex items-center space-x-2 text-gray-500"><User2Icon size='1em'/> {music.artist}</div>
      </div>
    </div>
  );
}
