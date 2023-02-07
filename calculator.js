const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstValue = "";
let operator = "";
let secondValue = "";

for (const button of buttons) {
  button.addEventListener("click", function () {
    const buttonValue = this.innerHTML;
    if (buttonValue === "C") {
      firstValue = "";
      operator = "";
      secondValue = "";
      display.value = "";
    } else if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      operator = buttonValue;
      firstValue = display.value;
      display.value = "";
    } else if (buttonValue === "=") {
      secondValue = display.value;
      display.value = eval(firstValue + operator + secondValue);
    } else {
      display.value += buttonValue;
    }
  });
}
