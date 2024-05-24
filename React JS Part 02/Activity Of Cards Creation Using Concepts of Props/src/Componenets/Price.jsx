import React from "react";
import "./Price.css";

const Price = ({ oldPrice, newPrice }) => {
  let newPrice_JSX_CSS = {
    fontSize: "30px",
    fontWeight: "Bolder",
  };

  return (
    <div>
      <span className="old-prices">{oldPrice}</span>
      &nbsp; &nbsp;
      <span style={newPrice_JSX_CSS}>{newPrice}</span>
    </div>
  );
};

export default Price;
