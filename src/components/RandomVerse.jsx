import React from "react";

import versesData from "../data/verses-data.json";

const randomIndexGen = Math.floor(Math.random() * versesData.verses.length);

const RandomVerse = () => {
  return (
    <div className="randomverse">
      <h5 style={{ fontStyle: "italic", fontWeight: "400" }}>
        {versesData.verses[randomIndexGen].text}
        <span> ~{versesData.verses[randomIndexGen].reference}</span>
      </h5>
    </div>
  );
};

export default RandomVerse;
