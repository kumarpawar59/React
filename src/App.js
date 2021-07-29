import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [name] = useState("kumar");
  let [counter] = useState(100);
  let [active] = useState(true);
  let [obj] = useState({ name: "nam" });
  let [list] = useState(["Akshay", "Raj"]);

  return (
    <div className="p-4 ">
      <h1>String  :: {name}</h1>
      <h1>number  :: {counter}</h1>
      <h1>Boolean :: {active +""}</h1>
      <h1>object  :: {JSON.stringify(obj)}</h1>
      <h1> Array  :: {list}</h1>
      <h1>obj   :: {obj.name}</h1>
    </div>
  );
}

export default App;
