import React from "react";
import { useState } from "react";

const InputFieldOperations = () => {
  // const [Name, SetName] = useState("Owais");
  // const [form, setForm] = useState({ email: "", phone: "" });
  const [form, setForm] = useState({});

  function Changing(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
    // console.log(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={Changing}
      />

      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={Changing}
      />
    </>
  );
};

export default InputFieldOperations;
