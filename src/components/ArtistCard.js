import React, { useEffect, useState, useMemo } from "react";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ArtistCard({ artist }) {
  var playcount = numberWithCommas(artist.playcount);
  var listeners = numberWithCommas(artist.listeners);

  return (
    <div className="songCard">
      <h2>{artist.name}</h2>
      <img src={artist.image[4]["#text"]} />
      <p className="songCard--playcount">Scrobbles: {playcount}</p>
      <p className="songCard--listeners">Listeners: {listeners}</p>
    </div>
  );
}

export default ArtistCard;
