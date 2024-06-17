import React, { useState } from "react";

// Here, we have to understand the concept of state hooks in react js

export default function TextArea(props) {
  const [Text, SetText] = useState("I am the initial Text ");

  const handleUpperCase = () => {
    SetText(Text.toUpperCase());
  };

  const handleChange = (event) => {
    SetText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h3 className="py-2 my-2">{props.heading}</h3>

        <textarea
          placeholder="Enter Your Text Here..."
          value={Text}
          onChange={handleChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
        ></textarea>

        <button className="btn btn-primary my-4" onClick={handleUpperCase}>
          Convert To Upper Case
        </button>
      </div>
    </>
  );
}
