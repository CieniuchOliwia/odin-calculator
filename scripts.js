let a = '';
let b = '';
let operator = '';
let display = '';
let roundedResult = '';
let indexOfComma = '';
let actContent = '';
let textOfPressedButton = '';

function add(a, b) {
    return (a + b);
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
    if (operator == 'add' || operator=='+') {
        return add(a, b);
    } else if (operator == 'subtract' || operator=='-') {
        return subtract(a, b);
    } else if (operator == 'multiply' || operator=='*') {
        return multiply(a, b);
    } else if (operator == 'divide' || operator=='/') {
        return divide(a, b);
    }
}

function roundResult(result) {
    if (result.length > 10 && Number.isInteger(result) == false) {
        indexOfComma = result.indexOf('.');
        return roundedResult = Math.round(result * Math.pow(10, 9 - indexOfComma)) / (Math.pow(10, 9 - indexOfComma));
    } else {
        return result;
    }
}


document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', event => {
        display = document.getElementById('display');
        actContent = display.textContent;
        textOfPressedButton = event.target.textContent;
        if (event.target.classList.contains('number')) {
            if (operator == '') {
                a = Number(a + textOfPressedButton);
                display.textContent = actContent + textOfPressedButton;
            } else if (operator != '') {
                b = Number(b + textOfPressedButton);
                display.textContent = actContent + textOfPressedButton;
            }

        } else if (event.target.classList.contains('operator')) {
            if (operator != '') {
                display.textContent = roundResult((operate(operator, a, b)).toString()) + textOfPressedButton;
                a = operate(operator, a, b);
                operator = event.target.id;
                b = 0;
            } else {
                operator = event.target.id;
                display.textContent = actContent + textOfPressedButton;
            }

        } else if (event.target.classList.contains('equals')) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
        }
    })
})

document.getElementById('AC').addEventListener('click', function () {
    operator = '';
    display.textContent = '';
    a = '';
    b = '';
})

document.addEventListener('keydown', event => {
    //console.log(parseInt(event.key));
    display = document.getElementById('display');
    actContent = display.textContent;
    textOfPressedButton = event.key;
    if (isNaN(parseInt(event.key)) == false) {
        if (operator == '') {
            a = Number(a + textOfPressedButton);
            display.textContent = actContent + textOfPressedButton;
        } else if (operator != '') {
            b = Number(b + textOfPressedButton);
            display.textContent = actContent + textOfPressedButton;
        }
    } else if (event.key=='+' || event.key=='-' || event.key=='*' || event.key=='/') {
        if (operator != '') {
            display.textContent = roundResult((operate(operator, a, b)).toString()) + textOfPressedButton;
            a = operate(operator, a, b);
            operator = event.key;
            b = 0;
        } else {
            operator = event.key;
            display.textContent = actContent + textOfPressedButton;
        }
    } else {
        display.textContent = 'ERROR';
    }
})




