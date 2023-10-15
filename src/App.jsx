import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { allCharacters } from "../data/data";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(allCharacters);

  useEffect(() => {
    async function fetchData() {  
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const data = await res.json();
      setCharacters(data.results.slice(0,3))
    }
    fetchData();
  }, []);

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
