import Genre from "./Components/Genre";
import Prompt from "./Components/Prompt";

export default function Home() {
  return (
    <div>
      <h1>Film Prompts</h1>
      <Prompt />
      <Genre />
    </div>
  );
}
