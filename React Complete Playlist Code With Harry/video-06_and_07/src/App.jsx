import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar name="TextUtils" about="About Us" />
      <TextArea heading="Add Your Text Utils Tasks" />
    </>
  );
}

export default App;
