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
      <button onClick={handleClick}>Generate A Genre</button>
      <div>
        <h2>{"here is your genre:"}</h2>
        <br />
        <p>{`${genre}`}</p>
      </div>
    </>
  );
}
