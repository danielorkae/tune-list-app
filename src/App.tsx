import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MusicRouter } from "./features/music/music.router";

function App() {
  return (
    <BrowserRouter>
      <MusicRouter />
    </BrowserRouter>
  );
}

export default App;
