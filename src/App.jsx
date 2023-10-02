import React from "react";
import {characters} from "../data/data"
import Navbar from "./components/Navbar";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
