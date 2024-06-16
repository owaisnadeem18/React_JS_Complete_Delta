import React from "react";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("form submitted");
};

const Forms = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="write something" />
        <button onClick={handleSubmit}>submit it </button>
      </form>
    </>
  );
};

export default Forms;
