import React, { useEffect, useState } from "react";

export default function UseEffectComp() {
  const [count, setCount] = useState(0);

  useEffect(
    function counter() {
      console.log("Count Increased");
    },
    [count]
  );

  //   function increaseBtn() {
  //     setCount(count + 1);
  //   }

  return (
    <div>
      <h1>{count}</h1>

      <h2>Use Effect Component</h2>
      <button onClick={() => setCount(count + 1)}>increase Count</button>
    </div>
  );
}
