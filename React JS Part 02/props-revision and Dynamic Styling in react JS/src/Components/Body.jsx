import React from "react";

const Body = ({ naam, colorText }) => {
  const styleText = { color: colorText };

  return (
    <>
      <h2 style={styleText}>Hello ! {naam} </h2>
    </>
  );
};

export default Body;
