import { Route, Routes } from "react-router-dom";
import { TopChartPage } from "../pages/top-chart.page";

export function MusicRouter() {
  return (
    <Routes>
      <Route path="/top" element={<TopChartPage />} />
    </Routes>
  );
}
