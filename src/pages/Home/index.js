import { useState, useEffect } from "react";

export default function Home() {
  const [promptList, setPromptList] = useState([]);
  const [prompt, setPrompt] = useState("");

  //fetch the data from data.json
  useEffect(() => {
    fetch("http://localhost:4000/prompts")
      .then((res) => res.json())
      .then((data) => setPromptList(data));
  }, [setPromptList]);

  const handleClick = () => {
    //generate a random number between 1 and limit
    const promptNum = Math.floor(Math.random() * promptList.length + 1);
    //find the prompt at that position in json
    promptList.find((item) => {
      if (item.num === `${promptNum}`) {
        //save to prompt state
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
