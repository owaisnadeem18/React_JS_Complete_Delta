// import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="Owais"
        heading="cricket"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Alert alert={alert} /> */}
      {/* <TextForm showAlert={showAlert} mode={mode} title="Owais Nadeem" /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
