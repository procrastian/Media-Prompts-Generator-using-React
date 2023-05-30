import { useState } from "react";
import prompts from "../../db/db.js";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const handleClick = () => {
    const promptNum = Math.floor(Math.random() * prompts.length + 1);
    prompts.find((item) => {
      if (item.num === `${promptNum}`) {
        return setPrompt(item.prompt);
      }
    });
  };

  //print to the web page
  return (
    <>
      <h1>Media Prompts</h1>
      <button onClick={handleClick}>Generate A Prompt</button>
      <div>
        <h2>{"Here is your prompt:"}</h2>
        <br />
        <p>{`${prompt}`}</p>
      </div>
    </>
  );
}
