const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

let temp;
let operator;

plusButton.addEventListener("click", () => {
  if (numberInput.value) {
    //    '5' -> 5
    temp = numberInput.value;
    operator = "+";
    numberInput.value = null;
  }
});

clearButton.addEventListener("click", () => {
  numberInput.value = "";
  temp = null;
  operator = null;
});

calculateButton.addEventListener("click", () => {
  console.log(temp, operator, numberInput.value);
  if (operator) {
    if (numberInput.value) {
      if (operator === "+") {
        resultInput.value = temp + Number(numberInput.value);
      } else if (operator === "-") {
        resultInput.value = temp - Number(numberInput.value);
      } else if (operator === "*") {
        resultInput.value = temp * Number(numberInput.value);
      } else if (operator === "/") {
        resultInput.value = temp / Number(numberInput.value);
      }
    }
  } else {
    if (numberInput.value) {
      resultInput.value = temp;
    }
  }
});