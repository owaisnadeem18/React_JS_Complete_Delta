import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar about={"About Us"} name={"Owais React App"} />
      <About />
    </>
  );
}

export default App;
