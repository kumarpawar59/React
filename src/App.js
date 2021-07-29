import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["hello"]);

  const myfun = (item) => {
    const list1 = [...list, "Kunal"];
    setList(list1);
  };
  return (
    <div>
      <h1>Hello</h1>
      <input type="button" value="Say Hello" onClick={myfun} />
      {list.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default App;
