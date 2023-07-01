import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <div className="searchBlock">
        <h1>😎 EmojiSearch 😎</h1>
        <input
          className="searchBar"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="What Emoji are tou looking for ???"
        />
      </div>
    </>
  );
};

export default Search;
