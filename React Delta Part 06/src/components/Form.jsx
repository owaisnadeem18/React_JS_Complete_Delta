import React from "react";
import { useState } from "react";

export default function Form() {
  const [FormData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleChange = (event) => {
    // setFormData((value) => {
    //   return { ...value , [event.target.name : event.target.value  ] };
    // });

    setFormData((currData) => {
      return { ...currData, [event.target.name]: [event.target.value] };
    });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="UserName">User Name</label>
          &nbsp; &nbsp;
          <input
            type="text"
            value={FormData.Username}
            onChange={handleChange}
            id="UserName"
            name="Username"
          />
        </div>
        <br />
        <div>
          <label htmlFor="Email">Email</label>
          &nbsp; &nbsp;
          <input
            type="email"
            id="Email"
            name="Email"
            value={FormData.Email}
            onChange={handleChange}
          />
        </div>
        <br />

        <div>
          <label htmlFor="Password">Password</label>
          &nbsp; &nbsp;
          <input
            type="password"
            value={FormData.Password}
            onChange={handleChange}
            id="Password"
            name="Password"
          />
        </div>
      </form>
    </>
  );
}
