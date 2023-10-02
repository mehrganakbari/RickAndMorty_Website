import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">LOGO 😎</div>
      <input
        type="text"
        className="text-field"
        placeholder="search characters ..."
      />
      <div className="navbar__result">Found X characters</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">X</span>
      </button>
    </div>
  );
}

export default Navbar;
