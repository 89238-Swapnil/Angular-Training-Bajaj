document.getElementById("calculateBtn").addEventListener("click", calculate);

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "div":
      if (num2 === 0) {
        document.getElementById("result").innerText = "Division by zero not allowed.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}
