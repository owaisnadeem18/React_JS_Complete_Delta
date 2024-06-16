import React from "react";
import { useState } from "react";

const LikeButton = () => {
  const [Like, SetLike] = useState(0);
  const [LikeBg, SetLikeBg] = useState(false);

  const toggleLiked = () => {
    SetLikeBg(!LikeBg);

    SetLike(Like + 1);
  };

  const styleLiked = {
    color: "red",
  };

  return (
    <div>
      <h2>Activity: Create a Like Button</h2>

      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Number of clicks &nbsp;
        <span> {Like}</span>
      </h2>

      <h1 onClick={toggleLiked}>
        {" "}
        {LikeBg ? (
          <span className="material-symbols-outlined" style={styleLiked}>
            heart_plus
          </span>
        ) : (
          <span className="material-symbols-outlined">favorite</span>
        )}{" "}
      </h1>
    </div>
  );
};

export default LikeButton;
