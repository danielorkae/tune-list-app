import { RootState } from "@/store";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MusicItem } from "../music/components/music-item";
import { fetchTopMusics } from "../music/music.thunk";

export function TopChartPage() {
  const dispatch = useDispatch();

  const musics = useSelector((state: RootState) => state.music.musics);

  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchTopMusics());
    };
    fetch();
  }, [dispatch]);

  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Top Chart
      </Heading>

      <div className="space-y-4">
        {musics.map((music) => (
          <MusicItem key={music.id} music={music} />
        ))}
      </div>
    </Box>
  );
}
