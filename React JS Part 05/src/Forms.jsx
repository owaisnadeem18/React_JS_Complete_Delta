import React, { useState } from "react";

export default function Forms() {
  const [Name, SetName] = useState("Owais");

  const HandleChange = (e) => {
    // SetName(e.target.value);
    console.log(e.target.value);
    SetName(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted ! ");
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="userName">Enter Your Name</label>
        <input type="text" value={Name} onChange={HandleChange} id="userName" />
        <button>Submit</button>
      </form>
    </>
  );
}
