import { useState } from "react";
import prompts from "../db/promptsData";
import ConsoleText from "./ConsoleText/ConsoleText";

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
      <div className="text_container">
        <h2>{"make a film about:"}</h2>
        <ConsoleText toPrint={prompt} />
        <button onClick={handleClick}>Generate A Prompt</button>
      </div>
    </>
  );
}
