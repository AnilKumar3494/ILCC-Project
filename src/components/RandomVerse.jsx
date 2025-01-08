import React from "react";

import versesData from "../data/verses-data.json";

const randomIndexGen = Math.floor(Math.random() * versesData.verses.length);

const RandomVerse = () => {
  return (
    <div className="randomverse">
      <h4 style={{ fontStyle: "italic", fontSize: "var(--fs-400)" }}>
        {versesData.verses[randomIndexGen].text}
        <span> ~{versesData.verses[randomIndexGen].reference}</span>
      </h4>
    </div>
  );
};

export default RandomVerse;
