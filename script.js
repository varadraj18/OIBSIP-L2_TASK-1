let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    result.value = eval(result.value);
}

function add() {
    result.value += '+';
}

function subtract() {
    result.value += '-';
}

function multiply() {
    result.value += '*';
}

function divide() {
    result.value += '/';
}
