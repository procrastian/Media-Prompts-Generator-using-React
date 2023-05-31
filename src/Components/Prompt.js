import { useState } from "react";
import prompts from "../db/promptsData"

export default function Prompt() {
  const [prompt, setPrompt] = useState("");

  const handleClick = () => {
    const promptNum = Math.floor(Math.random() * prompts.length + 1);
    prompts.find((item) => {
      if (item.num === `${promptNum}`) {
        return setPrompt(item.prompt);
      }
    });
  };

  return (
    <>
      <button onClick={handleClick}>Generate A Prompt</button>
      <div>
        <h2>{"here is your prompt:"}</h2>
        <br />
        <p>{`${prompt}`}</p>
      </div>
    </>
  );
}
