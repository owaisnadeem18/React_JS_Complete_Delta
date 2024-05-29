// a button component

function checkBtn() {
  alert("Button has been clicked ! ");
}

function checkDblBtn() {
  alert("Button has been double clicked ");
}

function mouseHover() {
  console.log("Welcome !!! ");
}

const Button = () => {
  return (
    <>
      <p></p>
      <button onClick={checkBtn}>Single Click Me</button>
      <br />
      <br />
      <button onDoubleClick={checkDblBtn}>Double Click Me</button>
      <p onMouseOver={mouseHover}>I am a mouse hover function</p>
    </>
  );
};

export default Button;
