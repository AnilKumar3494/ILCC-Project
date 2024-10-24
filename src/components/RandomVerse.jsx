import React from "react";

import versesData from "../data/verses-data.json";

const RandomVerse = () => {
  return (
    <div className="randomverse">
      <h5>{versesData.text}</h5>
    </div>
  );
};

export default RandomVerse;
