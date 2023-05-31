import { useState } from "react";
import genres from "../db/genreData";
import ConsoleText from "./ConsoleText/ConsoleText";

export default function Genre() {
  const [genre, setGenre] = useState("");

  const handleClick = () => {
    const genreNum = Math.floor(Math.random() * genres.length + 1);
    genres.find((item) => {
      if (item.num === `${genreNum}`) {
        return setGenre(item.genre);
      }
    });
  };

  return (
    <>
      <div className="text_container">
        <h2>{"in the genre of:"}</h2>
        <ConsoleText toPrint={genre} />
        <button onClick={handleClick}>Generate A Genre</button>
      </div>
    </>
  );
}
