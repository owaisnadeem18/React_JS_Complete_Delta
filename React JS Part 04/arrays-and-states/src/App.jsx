import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [arr, Setarr] = useState(["1st element"]);

  const increment = () => {
    setCount((val) => val + 1);
  };

  const updateArr = () => {
    // arr.push("2nd element");
    // Setarr(arr); // it will not get updated... You are required to destructure this array

    Setarr((Arr) => {
      return [...Arr, ` ,  2nd element `];
    });
    // Now it will work , because I have sent a copy of this array
  };

  return (
    <>
      <div className="container">
        <h2>{count}</h2>
        <button onClick={increment}>Click for Increment</button>

        <h3>Array : {arr}</h3>
        <button onClick={updateArr}>Click to update Array</button>
      </div>
    </>
  );
}

export default App;
