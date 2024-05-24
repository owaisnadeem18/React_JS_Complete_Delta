import React from "react";
import "./Cards.css";

// const Cards = ({ title, desc = "45", array, object, array_with_html }) => {
const Cards = ({ title, desc = "45", price }) => {
  // console.log(array);
  // console.log(object);
  // console.log(array_with_html);
  // let res = array_with_html.map((single) => <li>{single}</li>);
  let isDiscount = price > 40000;

  let apply_styles = {
    backgroundColor: isDiscount ? "Green" : "black",
    color: "white",
    border: "14px solid purple",
  };

  return (
    <>
      <div className="container" style={apply_styles}>
        <h1>{title}</h1>
        <p>{desc}</p>
        {/* <p className="arr-as-props">{array}</p>
        <h4> The Age of student is: {object.age}</h4>
        <h3> The profession of student is: {object.profession}</h3> */}
        {/* <h3>
          {array_with_html.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </h3> */}
        <h1>Price : {price}</h1>
        {price > 40000 ? <p>Discount of 10%</p> : null}
      </div>
    </>
  );
};

export default Cards;
