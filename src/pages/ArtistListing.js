import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { LAST_FM_KEY } from "../API_KEYS";
import ArtistCard from "../components/ArtistCard";
import Header from "../components/Header";

function Artists() {
  const [artistListData, setArtistListData] = useState([]);
  const ARTIST_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${LAST_FM_KEY}&limit=10&format=json`;

  useEffect(() => {
    axios
      .get(ARTIST_URL)
      .then((response) => {
        setArtistListData(response.data.artists.artist);
      })
      .catch((error) => {
        setArtistListData([]);
      });
  }, []);

  return (
    <div>
      <Header />
      {artistListData.map((artist, i) => (
        <ArtistCard artist={artist} key={i} />
      ))}
    </div>
  );
}

export default Artists;
