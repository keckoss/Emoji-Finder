import React, { useState } from "react";
import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";
import emoji from "./assets/emojiList_mar8cs.json";
import "./App.css";

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(emoji);

  const handleSearch = (searchQuery) => {
    const filteredResults = emoji.filter((element) =>
      element.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEmoji(filteredResults);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Line emoji={filteredEmoji} />
      <Footer />
    </>
  );
}

export default App;
