import React from "react";
import { useState } from "react";

const Body = () => {
  const [count, Setcount] = useState(0);

  const IncreaseCount = () => {
    Setcount(count + 1);
  };

  return (
    <div>
      <h1>Counter App in React JS Using States Hook</h1>

      <h3>Count: {count}</h3>
      <button onClick={IncreaseCount}>Click To Increment</button>
    </div>
  );
};

export default Body;
