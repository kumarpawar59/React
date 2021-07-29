import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "Function Call";
  let list = ["hello"];

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="Say Hello" />
      {list.map((item) => {
        return <h2>{item}</h2>;
      })}
    </div>
  );
}

export default App;
