import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [list, setlist] = useState(["delhi", "mumbai"]);
  let [num, setnum] = useState(100);
  let [name, setname] = useState("rahul");

  return (
    <div>
      <h1>statetful continiue </h1>
      <h1>list :: {list}</h1>
      <h1>number :: {num}</h1>
      <h1>string :: {name}</h1>
    </div>
  );
}

export default App;
