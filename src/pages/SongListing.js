import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { LAST_FM_KEY } from "../API_KEYS";
import SongCard from "../components/SongCard";

function Songs() {
  const [songListData, setSongListData] = useState([]);
  const URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${LAST_FM_KEY}&format=json`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setSongListData(response.data.tracks.track);
      })
      .catch((error) => {
        setSongListData([]);
      });
  }, []);

  console.log("songListData", songListData);

  return (
    <div>
      <h1>Top Streamed Songs</h1>
      {songListData.map((song, i) => (
        <SongCard song={song} key={i} />
      ))}
    </div>
  );
}

export default Songs;
