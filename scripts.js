let a = '';
let b = '';
let operator = '';
let display = '';
let roundedResult = '';
let actContent = '';
let displayB = '';
let displayOperator = '';


function add(a, b) {
    return (Number(a) + Number(b));
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b == 0) {
        alert("You can't divide by 0!");
    } else {
        return (a / b);
    }
}

function operate(operator, a, b) {
    if (operator == 'add' || operator == '+') {
        return add(a, b);
    } else if (operator == 'subtract' || operator == '-') {
        return subtract(a, b);
    } else if (operator == 'multiply' || operator == '*') {
        return multiply(a, b);
    } else if (operator == 'divide' || operator == '/') {
        return divide(a, b);
    }
}

function roundResult(result) {
    if (result.length > 15 && !Number.isInteger(result)) {
        let indexOfComma = result.indexOf('.');
        return roundedResult = Math.round(result * Math.pow(10, 14 - indexOfComma)) / (Math.pow(10, 14 - indexOfComma));
    } else {
        return result;
    }
}


document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', event => {
        display = document.getElementById('displayForA');
        actContent = display.textContent;
        displayB = document.getElementById('displayForB');
        actContentB = displayB.textContent;
        displayOperator = document.getElementById('displayForOperator');

        let textOfPressedButton = event.target.textContent;
        if (event.target.classList.contains('number')) {
            if (operator == '') {
                if (!validateDisplayLength(a)){
                    return;
                }
                a += textOfPressedButton;
                display.textContent = actContent + textOfPressedButton;
                checkIfThereAreSeveralCommas(a);

            } else {
                if (!validateDisplayLength(b)){
                    return;
                }
                b += textOfPressedButton;
                displayB.textContent = actContentB + textOfPressedButton;
                checkIfThereAreSeveralCommas(b);
            }

        } else if (event.target.classList.contains('operator')) {
            if (operator != '') {
                display.textContent = roundResult((operate(operator, a, b)).toString());
                displayOperator.textContent = textOfPressedButton;
                displayB.textContent = '';
                a = roundResult((operate(operator, a, b)).toString());
                operator = event.target.id;
                b = '';
                checkIfResultIsTooLong();

            } else {
                operator = event.target.id;
                displayOperator.textContent = textOfPressedButton;
            }

        } else if (event.target.classList.contains('equals')) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
            displayB.textContent = '';
            displayOperator.textContent = '';
            a = roundResult((operate(operator, a, b)).toString());
            b = '';
            operator = '';
            checkIfResultIsTooLong();
        }
    })
})

document.getElementById('AC').addEventListener('click', function () {
    display = document.getElementById('displayForA');
    displayB = document.getElementById('displayForB');
    displayOperator = document.getElementById('displayForOperator')
    operator = '';
    display.textContent = '';
    displayB.textContent = '';
    displayOperator.textContent = '';
    a = '';
    b = '';
})

document.addEventListener('keydown', event => {
    display = document.getElementById('displayForA');
    actContent = display.textContent;
    displayB = document.getElementById('displayForB');
    actContentB = displayB.textContent;
    displayOperator = document.getElementById('displayForOperator');

    let textOfPressedButton = event.key;
    if (!isNaN(parseInt(event.key)) || event.key == '.') {
        if (operator) {
            if (!validateDisplayLength(b)){
                return;
            }
            b = (b + textOfPressedButton);
            displayB.textContent = actContentB + textOfPressedButton;
            checkIfThereAreSeveralCommas(b);
        } else {
            if (!validateDisplayLength(a)){
                return;
            }
            a = (a + textOfPressedButton);
            display.textContent = actContent + textOfPressedButton;
            checkIfThereAreSeveralCommas(a);
        }
    } else if (textOfPressedButton == '+' || textOfPressedButton == '-' || textOfPressedButton == '*' || textOfPressedButton == '/') {
        if (operator) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
            a = roundResult((operate(operator, a, b)).toString());
            operator = textOfPressedButton;
            displayOperator.textContent = textOfPressedButton;
            b = '';
            displayB.textContent = '';
            checkIfResultIsTooLong();
        } else {
            operator = textOfPressedButton;
            displayOperator.textContent = textOfPressedButton;
        }
    } else if (textOfPressedButton == '=') {
        display.textContent = roundResult((operate(operator, a, b)).toString());
        a = roundResult((operate(operator, a, b)).toString());
        b = '';
        operator = '';
        displayB.textContent = '';
        displayOperator.textContent = '';
        checkIfResultIsTooLong();
    }
})



document.getElementById('BS').addEventListener('click', function () {
    display = document.getElementById('displayForA');
    displayB = document.getElementById('displayForB');
    displayOperator = document.getElementById('displayForOperator');
    if (b) {
        b = b.toString().substring(0, b.toString().length - 1);
        displayB.textContent = displayB.textContent.substring(0, displayB.textContent.length - 1)
    } else if (displayOperator.textContent == '+' || displayOperator.textContent == '-' || displayOperator.textContent == '/' || displayOperator.textContent == '*') {
        displayOperator.textContent = displayOperator.textContent.substring(0, displayOperator.textContent.length - 1);
    } else if (a) {
        a = a.toString().substring(0, a.toString().length - 1);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
})



function validateDisplayLength(displayNumber) {
    if (displayNumber.length > 14) {
        alert("You've entered too many numbers!");
        return false;
    }

    return true;
}


function checkIfResultIsTooLong() {
    if (a.toString().length > 15) {
        alert("Sorry! The result is too long! Try again :)");
        document.getElementById('displayForA').textContent = '';
        a = '';
        document.getElementById('displayForOperator').textContent = ''
        operator = '';
    }
}

function checkIfThereAreSeveralCommas(number) {
    let i = 0;
    let numberOfCommas = 0;
    for (i = 0; i <= (number.toString().length - 1); i++) {
        if (number.charAt(i) == '.') {
            numberOfCommas = numberOfCommas + 1;
            if (numberOfCommas >= 2) {
                alert("That's not a number! Please check number of commas and correct the entered number!");
            }
        };
    }
}