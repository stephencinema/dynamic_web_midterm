import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { getSong, getLyrics } from "genius-lyrics-api";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SongCard({ song }) {
  const [albumArt, setAlbumArt] = useState([]);
  const [songLyrics, setSongLyrics] = useState([]);

  const options = {
    apiKey: "NhN5_MKAaXAxWoo9syc3Wc06FU1gxEzOGfuptJBfBYp4MoBdS4LEEJsp7ceNpqJW",
    title: `${song.name}`,
    artist: `${song.artist.name}`,
    optimizeQuery: true,
  };

  useEffect(() => {
    getSong(options)
      .then((song) => {
        setAlbumArt(`${song.albumArt}`);
      })
      .catch((error) => {
        setAlbumArt([]);
      });
  }, []);

  useEffect(() => {
    getSong(options)
      .then((song) => {
        setSongLyrics(`${song.lyrics}`);
      })
      .catch((error) => {
        setSongLyrics([]);
      });
  }, []);

  var playcount = numberWithCommas(song.playcount)
  var listeners = numberWithCommas(song.listeners)

  return (
    <div className="songCard">
      <h2>{song.name} by {song.artist.name}</h2>
      <img src={albumArt} />
      <p className="songCard--playcount">Scrobbles: {playcount}</p>
      <p className="songCard--listeners">Listeners: {listeners}</p>
      <p className="songCard--lyrics">Lyrics: {songLyrics}</p>
    </div>
  );
}

export default SongCard;
