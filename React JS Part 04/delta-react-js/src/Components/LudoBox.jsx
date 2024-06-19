import React, { useState } from "react";

const LudoBox = () => {
  // const [movefirst, setmovefirst] = useState(1);
  // const [moveSecond, setmoveSecond] = useState(1);
  // const [moveThird, setmoveThird] = useState(1);
  // const [movefourth, setmovefourth] = useState(1);

  // We will not follow this above method . insted we have to use objects in state variables

  const [move, Setmove] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });

  // function clicked_first() {
  //   setmovefirst(movefirst + 1);
  // }
  // function clicked_second() {
  //   setmoveSecond(moveSecond + 1);
  // }
  // function clicked_third() {
  //   setmoveThird(moveThird + 1);
  // }
  // function clicked_fourth() {
  //   setmovefourth(movefourth + 1);
  // }

  let updateBlue = () => {
    Setmove((prevVal) => {
      return { ...prevVal, blue: prevVal.blue + 1 };
    });
  };
  let updateYellow = () => {
    Setmove((prevVal) => {
      return { ...prevVal, yellow: prevVal.yellow + 1 };
    });
  };
  let updateGreen = () => {
    Setmove((prevVal) => {
      return { ...prevVal, green: prevVal.green + 1 };
    });
  };
  let updateRed = () => {
    Setmove((prevVal) => {
      return { ...prevVal, red: prevVal.red + 1 };
    });
  };

  let firstStyles = {
    backgroundColor: "blue",
  };

  let secondStyles = {
    backgroundColor: "yellow",
    color: "black",
  };

  let thirdStyles = {
    backgroundColor: "red",
  };

  let fourthStyles = {
    backgroundColor: "green",
  };

  return (
    <div className="container">
      <h3>blue = {move.blue}</h3>
      <button style={firstStyles} onClick={updateBlue}>
        + 1
      </button>
      <h3>yellow = {move.yellow}</h3>
      <button style={secondStyles} onClick={updateYellow}>
        + 1
      </button>
      <h3>red = {move.red}</h3>
      <button style={thirdStyles} onClick={updateRed}>
        + 1
      </button>
      <h3>green = {move.green}</h3>
      <button style={fourthStyles} onClick={updateGreen}>
        + 1
      </button>
    </div>
  );
};

export default LudoBox;
