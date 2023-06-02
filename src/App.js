import Home from "./home";
import "./App.css";
import "./fonts/FiraCode-VariableFont_wght.ttf";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="screen">
          <Home />
        </div>
        <div className="controls">CONTROL PANEL</div>
      </div>
    </div>
  );
}

export default App;
