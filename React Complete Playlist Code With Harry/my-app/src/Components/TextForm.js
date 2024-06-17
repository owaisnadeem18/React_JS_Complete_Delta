import React, { useState } from "react";

export default function TexthtmlForm(props) {
  const handleOnClick = () => {
    // console.log("Button was pressed" + " " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Upper case !!! ", "success");
  };

  const handleLowerClick = () => {
    // console.log("Button was pressed" + " " + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lower case !!! ", "success");
  };

  const handleClearClick = () => {
    // console.log("Button was pressed" + " " + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared !!! ", "success");
  };

  const handleCopyClick = () => {
    // console.log("Button was pressed" + " " + text);
    let newText = document.getElementById("my-box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text has been copied to clipboard !!! ", "success");
  };

  const handleExtraSpaces = () => {
    // console.log("Button was pressed" + " " + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text's extra spaces has been cleared !!! ", "success");
  };

  const handleOnChange = (event) => {
    // console.log("Button of change was pressed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "Owais Nadeem"; [Wrong way to change the state]
  //   setText = "Owais Nadeem"; [Right way to change the state]

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.title}</h1>
        <label>
          <b>Text Area</b>
        </label>
        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          id="my-box"
          rows="9"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {" "}
        </textarea>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
          Convert to Upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter anything above in the box to preview it above"}
        </p>
      </div>
    </>
  );
}
