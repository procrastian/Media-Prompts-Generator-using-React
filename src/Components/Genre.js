import { useState } from "react";
import genres from "../db/genreData"

export default function Genre() {

  const [genre, setGenre] = useState("");

  const handleClick = () => {
    console.log("generate genre clicked");
    const genreNum = Math.floor(Math.random() * genres.length + 1);
    genres.find((item) => {
      if (item.num === `${genreNum}`) {
        return setGenre(item.genre);
      }
    });
  };

  return (
    <>
      
      <div>
        <h2>{"in the genre of:"}</h2>
        <p>{`${genre}`}</p>
      </div>
      <button onClick={handleClick}>Generate A Genre</button>
    </>
  );
}
