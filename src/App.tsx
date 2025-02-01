import { Provider as ChakraUiProvider } from "@/components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MusicRouter } from "./features/music/music.router";

function App() {
  return (
    <ChakraUiProvider>
      <BrowserRouter>
        <MusicRouter />
      </BrowserRouter>
    </ChakraUiProvider>
  );
}

export default App;
