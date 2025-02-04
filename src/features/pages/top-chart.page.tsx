import { AppLayout } from "@/components/layouts/app.layout";
import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Playlist } from "../music/components/playlist";
import { fetchDeezerChart } from "../music/music.thunk";
import "./top-chart.page.scss";

export function TopChartPage() {
  const dispatch = useDispatch();

  const playlists = useSelector((state: RootState) => state.music.topPlaylists);

  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchDeezerChart());
    };
    fetch();
  }, [dispatch]);

  return (
    <AppLayout className="top-chart-page">
      <div className="top-chart-page__playlists">
        {playlists.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </AppLayout>
  );
}
