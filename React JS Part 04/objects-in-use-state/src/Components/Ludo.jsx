import React, { useState } from "react";

export default function Ludo() {
  const [Move, setMove] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });

  const UpdateBlue = () => {
    setMove({ ...Move, blue: Move.blue + 1 });
  };
  const UpdateRed = () => {
    setMove((val) => {
      return { ...val, red: val.red + 1 };
    });
  };
  const UpdateGreen = () => {
    setMove({ ...Move, green: Move.green + 1 });
  };
  const UpdateYellow = () => {
    setMove({ ...Move, yellow: Move.yellow + 1 });
  };

  return (
    <>
      <div className="ludo">
        <h2>Ludo Game</h2>

        <p>Blue Moves = {Move.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}>
          {" "}
          +1
        </button>
        <p>Green Moves = {Move.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={UpdateGreen}>
          +1
        </button>
        <p>Yellow Moves = {Move.yellow} </p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={UpdateYellow}
        >
          +1
        </button>
        <p>Red Moves = {Move.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={UpdateRed}>
          +1
        </button>
      </div>
    </>
  );
}
