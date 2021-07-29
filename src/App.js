import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);

  let valueincrease = () => {
    let res = counter + 100;
    setcounter(res);
  };

  let [list, setlist] = useState("kumar");

  let adddata = () => {
    let name = [...list, "Student name list"];
    setlist(name);
  };

  return (
    <div>
      <h1>statefull continiue</h1>
      <h1>
        counter :: 👍{counter}
        <input type="button" value="count" onClick={valueincrease} />
      </h1>
      <hr />

      <h1>
        <input type="button" value="Say Hello" onClick={adddata} />
        String :: 👍 {list}
       
      </h1>

     
    </div>
  );
}

export default App;
