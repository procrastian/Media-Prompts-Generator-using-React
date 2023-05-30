import { useState, useEffect } from "react";

export default function Home() {
  const [promptList, setPromptList] = useState([]);
  // const [prompt, setPrompt] = useState("");

  //fetch the data from data.json
  useEffect(() => {
    fetch("http://localhost:4000/prompts")
      .then((res) => res.json())
      .then((data) => setPromptList(data));
  }, [setPromptList]);

  //find total num of prompts in list
  const totalPrompts = promptList.length;

  //generate a random number between 1 and limit
  const promptNum = Math.floor(Math.random() * totalPrompts + 1);

  //find the prompt at that position in json
  const findPrompt = promptList.find((item) => {
    return item.num === `${promptNum}`;
  });
  console.log("findPrompt", findPrompt);

  //print to the web page
  return (
    <>
      <h1>Media Prompts</h1>
      <button>Generate A Prompt</button>
      <div>
        <h2>{"Here is your prompt:"}</h2>
        <br />
        <p>{`${findPrompt.prompt}`}</p>
      </div>
    </>
  );
}
