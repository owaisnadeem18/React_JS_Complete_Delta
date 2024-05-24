import React from "react";
// import Cards from "./Components/Cards";
import "./App.css";
import Activity from "./Components/Activity";

function App() {
  // arr to pass as a props in our JSX
  // let arr = ["first", "second", "third"]; // We can also pass our arr like this way , but this is not too much frequent way

  // object to pass as a props in our JSX
  // let obj = { name: "Owais Nadeem", age: 22, profession: "student" }; // We can also pass our object like this way , but this is not too much frequent way

  return (
    // <>
    //   {/* <h1>Here We are Understanding the concept Of Props inside react JS </h1> */}
    //   {/* <div className="main-container">
    //     <Cards
    //       title={"Box-for-passing-array & Objects as props"}
    //       desc="This is the description for box # 01"
    //       price={84000}

    //       // <Cards title="Box # 01" desc="This is the description for Box # 01" />
    //       // <Cards title="Box # 02" desc="This is the description for Box # 02" />
    //       // // <Cards title="Box # 03" desc={4500 + 100} /> */}
    //   //{" "}
    //   {/* This data which is passing through the components of (Cards) is called as the 'Props' */}
    //   {/* // array={["first", "second", "third"]}
    //       // This is the most frequent way of passing array as our props
    //       // object={{ */}
    //   {/* //   name: "Owais Nadeem",
    //       //   age: 22,
    //       //   profession: "Front End Developer",
    //       // }} */}
    //   {/* // array_with_html=
    //       //   "first_list_element",
    //       //   "second_list_element",
    //       //   "third_list_element",
    //       // ]}
    //     // /> */}
    //   //{" "}
    //   {/* <Cards
    //       // title={"Box-for-passing-array & Objects as props"}
    //       // desc="This is the description for box # 02"
    //       // price={38000}
    //     // /> */}
    //   //{" "}
    //   {/* <Cards
    //       // title={"Box-for-passing-array & Objects as props"}
    //       // desc="This is the description for box # 03"
    //       // price={41000}
    //     // /> */}
    //   {/* // </div> */}
    //   //{" "}
    // </>

    <>
      <Activity naam="Owais Nadeem" text_color="orange" />
      <Activity naam="Ali" text_color="red" />
      <Activity naam="Ahmed" text_color="green" />
      <Activity naam="Sheikh Faisal" text_color="blue" />
      <Activity naam="Shakeela Khan" text_color="brown" />
      <Activity naam="Bial Niazi" text_color="purple" />
    </>
  );
}

export default App;
