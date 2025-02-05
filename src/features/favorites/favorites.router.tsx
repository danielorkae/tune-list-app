import { Route, Routes } from "react-router-dom";
import { FavoritesPage } from "./pages/favorites.page";

export function FavoritesRouter() {
  return (
    <Routes>
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
