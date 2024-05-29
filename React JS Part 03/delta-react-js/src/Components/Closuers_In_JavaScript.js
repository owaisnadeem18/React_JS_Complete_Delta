// Closuers_In_JavaScript

// function outer() {
//   var a = 50;
//   var b = 50;

//   function inner() {
//     let c;
//     c = a + b;
//     return c;
//   }
//   return inner();
// }

// console.log(outer());

function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let variable = outerFunction();
variable();
// myFunction(); // Output: I am outside!
