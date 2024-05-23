import React from "react";

let naam = "Owais Nadeem";

let num1 = 45;
let num2 = 15;
let add = num1 + num2;

const JSXcurlyBracket = () => {
  return (
    <>
      <h2>Hy ! my name is {naam.toUpperCase()} </h2>
      <p>
        The addition of {num1} + {num2} = {add}
      </p>
    </>
  );
};

export default JSXcurlyBracket;
