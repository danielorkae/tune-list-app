import { AppLayout } from "@/components/layouts/app.layout";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Playlist } from "../components/playlist";
import { TrendingMusics } from "../components/trending-musics";
import { fetchDeezerChart } from "../music.thunk";
import "./top-chart.page.scss";

export function TopChartPage() {
  const dispatch = useDispatch();

  const trendingMusics = useSelector(
    (state: RootState) => state.music.trendingMusics
  );
  const playlists = useSelector((state: RootState) => state.music.topPlaylists);

  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchDeezerChart());
    };
    fetch();
  }, [dispatch]);

  return (
    <AppLayout className="top-chart-page">
      <TrendingMusics musics={trendingMusics} />

      <div className="top-chart-page__playlists">
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </AppLayout>
  );
}
