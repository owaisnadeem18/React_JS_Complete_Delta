import React from "react";
import Title from "./Components/Title";
import "./App.css";
import JSXcurlyBracket from "./Components/JSXcurlyBracket";
import ProductTitle from "./Components/ProductTitle";

function App() {
  return (
    <>
      {/* <Title />
      <JSXcurlyBracket /> */}
      <div
        className="container"
        style={{ padding: "4rem", display: "flex", gap: "5rem" }}
      >
        <ProductTitle />
        <ProductTitle />
        <ProductTitle />
      </div>
    </>
  );
}

export default App;
