import React from "react";
import Search from "./Search";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <header>
          <h1>React Cinema</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default Header;
