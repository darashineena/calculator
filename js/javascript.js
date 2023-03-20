let currentValue = ""; //stored as a string
let pastValue = "";
let currentOperation = "";
let equaled;

const currentValueDisplay = document.querySelector(".current-value-display");
const pastValueDisplay = document.querySelector(".past-value-display");

const buttonArray = document.querySelectorAll("button");
buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        if (Number(button.id)) {
            if (equaled === true){ 
                currentValue = "";
                equaled = false;
            }
            currentValue = currentValue + button.id;
            handleNumberDisplay();
        }
        else if (button.id === "0") {
            if (!(currentValue === "")) {
                if (equaled === true){ 
                    currentValue = "";
                    equaled = false;
                }
                currentValue = currentValue + button.id;
                handleNumberDisplay();
            }
        }
        else {
            determineFunction(button.id);
        }
    });
});

function determineFunction(button) {
    if (button === ':' || button === 'X' || button === '-' || button === '+') {
        getRidOfLingeringDots();
        if (!(currentOperation === "")) {
            equals();
        }
        currentValueIsPast();
    }
    switch (button) {
        case 'CE':
            CE();
            break;
        case 'C':
            C();
            break;
        case 'DEL':
            DEL();
            break;
        case ':':
        case 'X':
        case '-':
        case '+':
            currentOperation = button;
            break;
        case '=':
            equals();
            break;
        case '+/-':
            negate();
            break;
        case '.':
            dot();
            break;
    }
    turnNumbersToStrings();
    handleNumberDisplay();
}

function CE(){
    currentValue = '';
}

function C(){
    currentValue = '';
    pastValue = '';
    currentOperation ='';
}

function DEL() {
    currentValue = currentValue.slice(0, currentValue.length - 1);
}

function division(result) {
    return result = pastValue / currentValue;
}

function multiplication(result) {
    return result = pastValue * currentValue;
}

function subtraction(result) {
    return result = pastValue - currentValue;
}

function addition(result) {
    return result = pastValue + currentValue;
}

function equals() {
    turnStringsToNumbers();
    switch (currentOperation) {
        case ":":
            currentValue = division();
            break;
        case "X":
            currentValue = multiplication();
            break;
        case "-": 
            currentValue = subtraction();
            break;
        case "+":
            currentValue = addition();
            break;
    }
    pastValue = "";
    currentOperation = "";
    equaled = true;
}

function negate() {
    if (currentValue === "" || currentValue == 0) return;
    currentValue = Number(currentValue) * -1;
    currentValue = String(currentValue);
}

function dot() {
    if (currentValue.includes(".")) return;
    if (equaled === true){ 
        currentValue = "";
        equaled = false;
    }
    if (currentValue === "") currentValue = "0.";
    else currentValue += ".";
}

function currentValueIsPast() {
    pastValue = currentValue;
    currentValue = "";
}

function turnStringsToNumbers() {
    currentValue = Number(currentValue);
    pastValue = Number(pastValue);
}

function turnNumbersToStrings() {
    currentValue = String(currentValue);
    pastValue = String(pastValue);
}

function getRidOfLingeringDots() {
    if (currentValue.slice(-1) === ".") currentValue = currentValue.slice(0, currentValue.length - 1);
    if (pastValue.slice(-1) === ".") pastValue = pastValue.slice(0, currentValue.length - 1);
}

function handleNumberDisplay() {
    if (currentValue === "") currentValueDisplay.textContent = "0";
    else if (currentValue.slice(-1) === ".") currentValueDisplay.textContent = currentValue + "0";
    else currentValueDisplay.textContent = currentValue;
    pastValueDisplay.textContent = pastValue + ' ' + `${currentOperation}`;
}