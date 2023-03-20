let currentValue = ""; //stored as a string
let pastValue = "";
const numberDisplay = document.querySelector(".number-display");
const buttonArray = document.querySelectorAll("button");
buttonArray.forEach(button => {
    button.addEventListener('click', () => {
        if (Number(button.id)) {
            currentValue = currentValue + button.id;
            handleNumberDisplay();
        }
        else if (button.id === "0") {
            if (!(currentValue === "")) {
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

            break;
        case 'X':

            break;
        case '-':

            break;
        case '+':
            
        case '=':

            break;
        case '+/-':
            negate();
            break;
        case '.':
            dot();
            break;
    }
    handleNumberDisplay();
}

function CE(){
    currentValue = '';
}

function C(){
    currentValue = '';
    pastValue = '';
}

function DEL() {
    currentValue = currentValue.slice(0, currentValue.length - 1);
    console.log(currentValue);
}
function division() {

}

function multiplication() {

}

function subtraction() {

}

function addition() {

}

function equals() {

}

function negate() {
    currentValue = Number(currentValue) * -1;
    console.log(typeof currentValue);
    currentValue = String(currentValue);
    console.log(typeof currentValue);
}

function dot() {
    if (currentValue === "") currentValue = "0.";
    else currentValue += ".";
}

// function calculator(button) {
//     console.log(button);
// }

function handleNumberDisplay() {
    if (currentValue === "") numberDisplay.textContent = "0";
    else if (currentValue.slice(-1) === ".") numberDisplay.textContent = currentValue + "0";
    else numberDisplay.textContent = currentValue;
}