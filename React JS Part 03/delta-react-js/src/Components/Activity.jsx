import React from "react";
import { useState } from "react";
import "./Activity.css";

const Activity = () => {
  // use state # 01
  const [Liked, SetLiked] = useState(true);
  // use state # 01
  const [Clicks, SetClicks] = useState(0);

  function btnClicked() {
    SetLiked(!Liked);
    SetClicks(Clicks + 1);
  }

  let style_liked = {
    color: "red",
    backgroundColor: " black ",
    borderRadius: "50%",
    padding: ".8rem",
    textAlign: "center",
  };

  return (
    <>
      <h1>Like Counter </h1>
      <h3>Total number of clicks are = {Clicks}</h3>

      <div className="btn" onClick={btnClicked}>
        {Liked ? (
          <span class="material-symbols-outlined">favorite</span>
        ) : (
          <span class="material-symbols-outlined" style={style_liked}>
            favorite
          </span>
        )}
      </div>
    </>
  );
};

export default Activity;
