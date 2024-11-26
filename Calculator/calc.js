let currentInput = "";
let previousInput = "";
let operator = null;

function appendNumber(number) {
  if (number === "." && currentInput.includes(".")) return;
  currentInput = currentInput.toString() + number.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = currentInput || "0";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    computeResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function computeResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current !== 0 ? prev / current : "Error";
      break;
    default:
      return;
  }

  currentInput = result;
  operator = null;
  previousInput = "";
  updateDisplay();
}
