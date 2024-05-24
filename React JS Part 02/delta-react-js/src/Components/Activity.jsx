import React from "react";

const Activity = ({ naam, text_color }) => {
  //   let styles = naam.length > 6 ? { color: "red" } : { color: "green" };
  //   let styles = { color: text_color };

  //   console.log(text_color);

  return (
    <>
      <h1>
        Hello ,<span style={{ color: text_color }}>{naam}</span> , your
        favourite color was
        <span style={{ color: text_color }}> {text_color} </span>
      </h1>
      ;
    </>
  );
};

export default Activity;
