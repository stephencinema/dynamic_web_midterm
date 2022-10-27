import React from "react";

function Header() {
  return (
    <div className="header--container">
      <h1 className="header--item">Real-Time Music Chart</h1>
      <a className="header--item" href="/">
        Top Tracks
      </a>
      <a className="header--item" href="/artists">
        Top Artists
      </a>
    </div>
  );
}

export default Header;
