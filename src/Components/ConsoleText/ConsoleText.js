import "./consoleText.css"

export default function ConsoleText({ toPrint }) {

  return (
    <>
      <p className="print_text">{toPrint}</p>
    </>
  );
}
