import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [face, setFace] = useState(false);
  const arrayCards = Array.from({ length: props.cards }, (v, i) => i);
  // const listItems = arrayCards.map((number, index) => (
  //   <button key={index} onClick={() => setFace(!face)}>
  //     {face ? "Up" : "Down"}
  //   </button>
  // ));

  const handleOnCick = () => {
    e.preventDefault();
    setFace(!face);
  };

  return (
    <div>
      {arrayCards.map((data, index) => (
        <li key={index}>
          <a></a>
        </li>
      ))}
    </div>
  );
}

export default App;

