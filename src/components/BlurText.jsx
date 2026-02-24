import React, { useEffect, useState } from "react";
import "../styles/BlurText.css";

export const BlurText = ({ text, delay = 0.1, className = "" }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  return (
    <span className={`blur-text ${className}`}>
      {letters.map((letter, idx) => (
        <span
          key={idx}
          className="blur-letter"
          style={{ animationDelay: `${idx * delay}s` }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};
