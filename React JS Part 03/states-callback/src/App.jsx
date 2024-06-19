import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function updateValue() {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((i) => {
      return i + 12;
    });
    setCount((e) => {
      return e + 27;
    });
  }

  return (
    <>
      <div className="card">
        <button onClick={updateValue}>
          count is {count}
          {/* Aik baat hamesha yaad rakhain k , jab bhi aap k pass koi new value previous aik value dusri value per depend karti hay , then we can always use call stack inside it... */}
        </button>
      </div>
    </>
  );
}

export default App;
