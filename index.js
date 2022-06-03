var input = "";
var result;
show(input);
// for collecting values
function perform(value) {
    document.querySelector("#input").focus();
    input = input + value;
    show(input);
}

//  for showing
function show(input) {
    document.querySelector("#input").value = input;
}

//  just for clearing the input field
function clean(C) {
    document.querySelector("#input").value = C;
}

// for result || actual calculation
function result() {
    input = document.querySelector("#input").value;
    var array = input.split("");
    var No = [];
    var OP = [];
    var str = "";

    for (var i = 0; i < array.length; i++) {
        if (Number(array[i]) >= 0 && Number(array[i]) <= 9) {
            str = str + array[i];
        } else if (array[i] == "+" || array[i] == "-" || array[i] == "*" || array[i] == "/") 
        {
            No.push(str);
            str = "";
            OP.push(array[i]);
        } else {
            alert("Invalid Operator");
        }
    }
    // for pushing last value of str
    No.push(str);
    var result = Number(No[0]);

    for (var i = 0; i < OP.length; i++) {
        if (OP[i] == "+") {
            result = result + Number(No[i + 1]);
        } else if (OP[i] == "-") {
            result = result - Number(No[i + 1]);
        } else if (OP[i] == "*") {
            result = result * Number(No[i + 1]);
        } else if (OP[i] == "/") {
            result = result / Number(No[i + 1]);
        }
    }

    input = result;

    show(input);

    document.querySelector("#input").focus();
}