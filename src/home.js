import Genre from "./Components/Genre";
import Prompt from "./Components/Prompt";

export default function Home() {
  return (
    <div className="console-containter">
      <h1>Film Prompts</h1>
      <Prompt />
      <br/>
      <Genre />
    </div>
  );
}
