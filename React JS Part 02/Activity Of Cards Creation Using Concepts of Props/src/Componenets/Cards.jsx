import React from "react";
import Price from "./Price";
import "./Card.css";

const Cards = ({ title, index }) => {
  let oldPriceArray = [70, 80, 50, 30];
  let newPriceArray = [150, 180, 140, 90];
  let cardDes = [
    "Once upon a time, Flour was priced at 70 rupees per kilogram in Pakistan. However, with the onset of high inflation, the country is now facing significant economic troubles. The soaring prices of essential commodities have strained the budgets of many households, making it increasingly difficult for people to afford basic necessities. The rapid inflation has exacerbated economic instability, creating a challenging environment for both consumers and businesses alike.",
    "Once upon a time, sugar was priced at 80 rupees per kilogram in Pakistan. However, with the onset of high inflation, the country is now facing significant economic troubles. The soaring prices of essential commodities have strained the budgets of many households, making it increasingly difficult for people to afford basic necessities. The rapid inflation has exacerbated economic instability, creating a challenging environment for both consumers and businesses alike.",
    "Once upon a time, rice was priced at 50 rupees per kilogram in Pakistan. However, with the onset of high inflation, the country is now facing significant economic troubles. The soaring prices of essential commodities have strained the budgets of many households, making it increasingly difficult for people to afford basic necessities. The rapid inflation has exacerbated economic instability, creating a challenging environment for both consumers and businesses alike.",
    "Once upon a time, salt was priced at 30 rupees per kilogram in Pakistan. However, with the onset of high inflation, the country is now facing significant economic troubles. The soaring prices of essential commodities have strained the budgets of many households, making it increasingly difficult for people to afford basic necessities. The rapid inflation has exacerbated economic instability, creating a challenging environment for both consumers and businesses alike.",
  ];
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <p>{cardDes[index]}</p>

        <Price
          oldPrice={oldPriceArray[index]}
          newPrice={newPriceArray[index]}
        />
      </div>
    </>
  );
};

export default Cards;
