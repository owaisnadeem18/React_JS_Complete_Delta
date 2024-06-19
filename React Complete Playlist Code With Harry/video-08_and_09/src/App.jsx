import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar name="TextUtils" about="About Us" />
      <TextArea heading="Enter Your Text To Analyze" />
    </>
  );
}

export default App;
