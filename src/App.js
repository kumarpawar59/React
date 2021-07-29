import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {

  //stateless member 
  let counter = 100;



  let increment = () => {
    counter += 1;
    console.log(counter);
  };

  return (
    <div>
      <h1 className="bg-primary p-2 my-3">Second p1</h1>
      {counter}
      <input type="button" value="Counter" onClick={increment} />
    </div>
  );
}

export default App;


