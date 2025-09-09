// global element
const operatorList = ["+", "*", "/", "-", "%"];
const numberList = "1234567890=";
let resultElement = document.getElementById("result");
let output = "";
let lastCharacter = "";
let lastOperator = "+";

// select all the buttons
let buttons = document.getElementsByClassName("btn");

// get the button pressed value
const calculate = (event) => {
  calculateOperation(event.target.innerText);
};

// general function to calculate using pressed button as input
const calculateOperation = (pressedBtn) => {
  // let pressedBtn = event.target.innerText;

  //   update x to *
  if (pressedBtn == "x") {
    pressedBtn = "*";
  }

  // CASE OF PRESSED BUTTON
  if (pressedBtn == "=") {
    // calculate the result
    output = eval(output).toString();
    displayOutput(output);
  } else if (pressedBtn == "AC") {
    // clearing the result
    output = "";
    displayOutput(output);
  } else if (pressedBtn == "C") {
    output = output.slice(0, output.length - 1);
    displayOutput(output);
  } else {
    // encounter operator character
    // check if current pressed button and last pressed button is an operator
    if (
      operatorList.includes(pressedBtn) &&
      operatorList.includes(lastCharacter)
    ) {
      // alert("CONDITION MET");
      output = output.slice(0, output.length - 1);
    }

    // check if decimal point was pressed
    if (pressedBtn == ".") {
      console.log(output);
      let outputArray = output.toString().split(lastOperator);
      console.log(outputArray);
      let lastNumber = outputArray[outputArray.length - 1];
      console.log(lastNumber);

      if (lastNumber.includes(".")) {
        return;
      }
    }

    //  update the result element
    output = output + pressedBtn;
    displayOutput(output);
  }

  // update last operator
  if (operatorList.includes(pressedBtn)) {
    lastOperator = pressedBtn;
  }

  // update last character
  lastCharacter = pressedBtn;
};

// displayOutput the result
const displayOutput = (result) => {
  resultElement.innerText = result || "0.0";
};

// initial display output
displayOutput(output);

// add click event listerner to all the buttons
for (item of buttons) {
  item.addEventListener("click", calculate);
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (numberList.includes(event.key) || operatorList.includes(event.key)) {
    calculateOperation(event.key);
  }

  if (event.key === "Enter") {
    calculateOperation("=");
  }
});
