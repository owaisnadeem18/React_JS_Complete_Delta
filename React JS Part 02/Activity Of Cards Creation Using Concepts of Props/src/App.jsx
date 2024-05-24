import "./App.css";
import Cards from "./Componenets/Cards";

function App() {
  return (
    <>
      <h1>New Price Rate After High Inflation Rate</h1>
      <div className="card-container">
        <Cards title="01 Kg Flour" index={0} />
        <Cards title="01 Kg Sugar" index={1} />
        <Cards title="01 Kg Rice" index={2} />
        <Cards title="01 Kg Salt" index={3} />
      </div>
    </>
  );
}

export default App;
