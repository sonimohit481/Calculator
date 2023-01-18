let input = ""; //declearing variavle for input
let result; // for end result
DisplayInput(input);
//  perform function call on every button call
function Perform(value) {
  input = input + value;
  DisplayInput(input);
}
// to display data on input box
function DisplayInput(input) {
  document.querySelector("#input").value = input;
}
//  for cleaearing the data in input box
function ClearInput(C) {
  document.querySelector("#input").value = C;
}
// for end result
function Result() {
  input = document.querySelector("#input").value;
  let array = input.split("");
  let number = [];
  let operator = [];
  let digitValue = "";
  // filtering operator and digits
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) >= 0 && Number(array[i]) <= 9) {
      digitValue = digitValue + array[i];
    } else if (
      array[i] == "+" ||
      array[i] == "-" ||
      array[i] == "*" ||
      array[i] == "/"
    ) {
      number.push(digitValue);
      digitValue = "";
      operator.push(array[i]);
    } else {
      alert("Invalid operatorerator");
    }
  }
  number.push(digitValue);
  var result = Number(number[0]);
  //   performing actual thing
  for (var i = 0; i < operator.length; i++) {
    if (operator[i] == "+") {
      result = result + Number(number[i + 1]);
    } else if (operator[i] == "-") {
      result = result - Number(number[i + 1]);
    } else if (operator[i] == "*") {
      result = result * Number(number[i + 1]);
    } else if (operator[i] == "/") {
      result = result / Number(number[i + 1]);
    }
  }
  //   printing result
  DisplayInput(result);
}
