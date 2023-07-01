import React, { useState } from "react";

function Line(props) {
  const maxResults = 10;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {props.emoji.slice(0, maxResults).map((element, index) => (
        <div
          className="result"
          key={index}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <div className="resultats1">
            {element.symbol} {element.title}
          </div>
          <div className="resultats2">
            {hoveredIndex === index ? "Click to Copy" : ""}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Line;
