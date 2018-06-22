import React from "react";
import Search from "./Search";

function Header({ receiver }) {
  return (
    <div className="app__header">
      <header>
        <h1>React Cinema</h1>
      </header>
      <Search receiver={receiver} />
    </div>
  );
}

export default Header;
