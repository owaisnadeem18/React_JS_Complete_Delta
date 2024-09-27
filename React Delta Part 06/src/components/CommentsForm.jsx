import React, { useState } from "react";
import "./CommentsForm.css";

export default function () {
  const [formData, setFormData] = useState({
    UserName: "",
    remarks: "",
    rating: "",
  });

  function handleInputChange(e) {
    setFormData((currVal) => {
      return { ...currVal, [e.target.name]: e.target.value };
    });
  }

  function HandleSubmit(e) {
    console.log(formData);
    setFormData({
      UserName: "",
      remarks: "",
      rating: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <h3>Comments Form</h3>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Form"
          name="UserName"
          value={formData.UserName}
          onChange={handleInputChange}
        />
        <br /> <br />
        <textarea
          value={formData.remarks}
          placeholder="Add some remarks"
          name="remarks"
          onChange={handleInputChange}
        ></textarea>
        <br /> <br />
        <input
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          placeholder="Number"
          name="rating"
          onChange={handleInputChange}
        />
        <br /> <br />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
