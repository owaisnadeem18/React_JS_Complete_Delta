import React from "react";

const PriceBox = ({ price, productName, ManufacturingDate }) => {
  let ConditionalStyles = {
    backgroundColor: price >= 40000 ? "red" : "yellow",
    color: "black",
  };

  return (
    <div>
      <h2 style={ConditionalStyles}>price : {price}</h2>
      <h3>Name of the product : {productName} </h3>
      <h3>Manufacturing Date : {ManufacturingDate} </h3>
      <br />
    </div>
  );
};

export default PriceBox;
