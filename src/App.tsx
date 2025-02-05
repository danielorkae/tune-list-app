import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FavoritesRouter } from "./features/favorites/favorites.router";
import { MusicRouter } from "./features/music/music.router";
import store from "./store";

function App() {
  return (
      <StoreProvider store={store}>
        <BrowserRouter>
          <FavoritesRouter/>
          <MusicRouter />
        </BrowserRouter>
      </StoreProvider>
  );
}

export default App;
