import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  function clickHua() {
    alert("I have been clicked !");
  }

  return (
    <>
      <h3>Material UI Demo</h3>
      <Button variant="contained" onClick={clickHua}>
        Btn
      </Button>

      <Button variant="contained" color="error">
        Error
      </Button>
    </>
  );
}

export default App;
