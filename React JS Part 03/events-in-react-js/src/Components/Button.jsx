import React from "react";

// const funcAlert = () => {
//   alert("Hello");
// };

let func = () => {
  console.log("Double clicked !!!");
};

const Button = () => {
  return (
    <div>
      <button onDoubleClick={func}>Click me</button>
    </div>
  );
};

export default Button;
