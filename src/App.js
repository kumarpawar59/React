import logo from "./logo.svg";
import "./App.css";

function App() {
  let id = "100";
  let name = "kumar";
  let city = "pune";
  return (
    <div>
      <h1>{name},{city}</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default App;
