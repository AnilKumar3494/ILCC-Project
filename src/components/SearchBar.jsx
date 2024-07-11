import React, { useState } from "react";
import Data from "../data/mock-data.json";

import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const searchFilter = Data.filter((post) => {
    if (query === "") {
      return post;
    } else if (post.category.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  });
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setQuery(event.target.value)}
      />
      {/* {searchFilter.map((post, index) => (
        <div key={index} className="search_bar_container">
          <p>{post.author}</p>
        </div>
      ))} */}
    </>
  );
};

export default SearchBar;
