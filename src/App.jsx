import { React, useState } from "react";
import Navbar from "./components/Navbar";
import { allCharacters } from "../data/data";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(allCharacters);
  return (
    <div className="app">
      <Navbar numOfResult={characters.length} />
      <Main characters={characters}>
        <CharacterList characters={characters} />
        <CharacterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}
