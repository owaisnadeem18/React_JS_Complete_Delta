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

  const handleLowerCase = () => {
    SetText(Text.toLowerCase());
  };

  const handleClearText = () => {
    SetText("");
  };

  const handleCopyText = () => {
    const textArea = document.getElementById("textarea");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    // Optionally, you can add a notification or alert to inform the user
    alert("Text copied to clipboard!");
  };

  const handleExtraSpaces = () => {
    let textVariable = Text.split(/[ ]+/);
    SetText(textVariable.join(" "));
  };

  const handleCapitalize = () => {
    let text = Text.split(" ");

    text = text.map((w) => {
      if (w.length > 0) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase();
      } else {
        return w;
      }
    });

    SetText(text.join(" "));
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
          id="textarea"
          rows="6"
        ></textarea>

        <button
          className="btn btn-primary my-4 mx-2 "
          onClick={handleUpperCase}
        >
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert To Lower Case
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>
          Capitalize First Letter
        </button>
      </div>

      <div className="container">
        <h3>Preview</h3>
        <p>{Text}</p>
        <h2>Your Text Summary</h2>
        <p>
          Total Characters : {Text.trim().length}
          &nbsp; Total Words :
          {Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length}
        </p>
        <p>
          Time To read{" "}
          {Text.trim() === "" ? 0 : (0.008 * Text.split(" ").length).toFixed(2)}{" "}
          minutes
        </p>
      </div>
    </>
  );
}
