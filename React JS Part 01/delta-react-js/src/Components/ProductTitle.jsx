import React from "react";
import "./ProductTitle.css";

const ProductTitle = () => {
  return (
    <>
      <div
        className="container"
        style={{
          border: "2px solid red",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h2>Product Title </h2>
        <h3>Product Description </h3>
        <button style={{ padding: "1rem 5rem" }}>Order Now</button>
      </div>
    </>
  );
};

export default ProductTitle;
