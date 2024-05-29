import React from "react";
import { useState } from "react";

const Call_backs_in_React_JS = () => {
  const [count, setCount] = useState(0);

  function clickFunction() {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={clickFunction}>Increase Count</button>
    </>
  );
};

export default Call_backs_in_React_JS;
