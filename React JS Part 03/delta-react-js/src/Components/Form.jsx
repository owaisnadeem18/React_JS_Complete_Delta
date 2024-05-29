import React from "react";

const HandleSubmit = (event) => {
  event.preventDefault();
  console.log("I have been clicked ! ");
  console.log(event);
};

const Form = () => {
  return (
    <>
      <form
        action="
    "
      >
        <input type="text" placeholder="Enter your name" />
        <button onClick={HandleSubmit}>Click me </button>
      </form>
    </>
  );
};

export default Form;
