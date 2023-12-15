let displayValue = '';
let previousValue = '';
let currentOperation = '';

function addNumber(number) {
    displayValue += number;
    updateDisplay();
}

function addOperation(operation) {
    previousValue = displayValue;
    displayValue = '';
    currentOperation = operation;
}

function equal() {
    if (currentOperation === '+') {
        displayValue = parseFloat(previousValue) + parseFloat(displayValue);
    } else if (currentOperation === '-') {
        displayValue = parseFloat(previousValue) - parseFloat(displayValue);
    } else if (currentOperation === '*') {
        displayValue = parseFloat(previousValue) * parseFloat(displayValue);
    } else if (currentOperation === '/') {
        displayValue = parseFloat
