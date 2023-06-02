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
      
      <div>
        <h2>{"make a film about:"}</h2>
        <p>{`${prompt}`}</p>
      </div>
      <button className="prompt" onClick={handleClick}><strong>Generate Prompt</strong></button>
    </>
  );
}
