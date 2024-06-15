import "./App.css";
import Body from "./Components/Body";
import PriceBox from "./Components/PriceBox";

function App() {
  return (
    <>
      <hr />
      <h2>Activity # 01 has been completed</h2>
      <Body naam="Owais" colorText="white" />
      <Body naam="hamza" colorText="green" />
      <Body naam="hammad" colorText="orange" />
      <hr />

      <PriceBox
        price={45000}
        productName="Laptop"
        ManufacturingDate="24 / 5 / 2022"
      />
      <PriceBox
        price={35000}
        productName="Samsung A-4 Mobile"
        ManufacturingDate="29 / 2 / 2024"
      />
      <PriceBox
        price={25000}
        productName="Samsung A-10 Mobile"
        ManufacturingDate="29 / 2 / 2023"
      />
    </>
  );
}

export default App;
