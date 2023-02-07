//These declare the variables and tells javascript about all the input types in the HTML page

const firstNumber = document.getElementById("firstnumber");
const secondNumber = document.getElementById("secondnumber");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculate");
const resultsList = document.getElementById("results");
const clearResults = document.getElementById("clear");

//When a button is pressed to calculate, the code needs to call the calculate function in order to allow any calculations to occur.
//This is where an eventListener becomes important. It is telling java to do something once input in the form of a click occurs
calculateBtn.addEventListener("click", calculate);

//Similiar to the eventListener above only this eventListeners job is to remove all calculations in order to perform another calculation
clearResults.addEventListener("click", clearList);

//Without this function, the above eventListener would not be able to work. It is this function which entails the activity of the function.
//const num1 and const num2 are assigned to the variables declared in lines 3 and 4 and a result is formulated via the variable declared in
//line 7 above. The parseFloat function ensures that no calculation takes place if any input is given that is not number related.
function calculate() {
  const num1 = parseFloat(firstNumber.value);
  const num2 = parseFloat(secondNumber.value);

  let result;

  //This line of code allows the choice of operator to be switched
  switch (operator.value) {
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
      result = num1 / num2;
      break;
    default:
      result = 0;
  }

  //this line of code below assigns the result to the value of the firstNumber once the calculation has been completed
  firstNumber.value = result;

  //this line of code below creates a log of calculations from the previous 7 calculations
  const newResult = document.createElement("li");

  //This line of code below is part of the function that displays the calculation result in the HTML docume
  newResult.textContent = result;

  //this line of code below allows the programme to retain the sum from the previous calculation. This result in the programme
  //calculating the number exponentially
  resultsList.prepend(newResult);
}

//this function removes all calculations from the programme
function clearList() {
  while (resultsList.firstChild) {
    resultsList.removeChild(resultsList.firstChild);
  }
}
