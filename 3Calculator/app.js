import { Calculator } from "./Calculator.js";

const numbers = document.querySelectorAll(".number");
const smallOutput = document.querySelector(".small-output");
const largeOutput = document.querySelector(".large-output");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");

const calc = new Calculator(largeOutput, smallOutput);

//Clear output
clear.addEventListener("click", () => {
  calc.clear();
  calc.updateDisplay();
});

//Display output
numbers.forEach((n) => {
  n.addEventListener("click", () => {
    calc.appendToValue(n.innerText);
    calc.updateDisplay();
  });
});

//Remove one character at the end
del.addEventListener("click", () => {
  calc.delete();
  calc.updateDisplay();
});

//Add operation
operations.forEach((op) => {
  op.addEventListener("click", () => {
    calc.choseOperation(op.innerText);
    calc.updateDisplay();
  });
});

//Compute the result
equal.addEventListener("click", () => {
  calc.compute();
  calc.updateDisplay();
});
