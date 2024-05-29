import React from "react";
import { useState } from "react";

const CounterApp = () => {
  let [counter, setCounter] = useState(0);
  let CounterFunction = () => {
    setCounter(counter + 1); // This setRender method actually triggers the component re render
    console.log(counter); // it is one time behind the counting of my counter
  };

  return (
    <>
      <h1>Use State Hook in React JS</h1>
      <h2>Counter App in React JS</h2>
      <h4>The counter is = {counter}</h4>
      <button onClick={CounterFunction}>Click for the increment</button>
    </>
  );
};

export default CounterApp;
