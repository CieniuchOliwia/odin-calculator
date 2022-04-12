let a = '';
let b = '';
let operator = '';
let display = '';
let roundedResult = '';
let actContent = '';


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
    if (result.length > 10 && !Number.isInteger(result)) {
        let indexOfComma = result.indexOf('.');
        return roundedResult = Math.round(result * Math.pow(10, 9 - indexOfComma)) / (Math.pow(10, 9 - indexOfComma));
    } else {
        return result;
    }
}


document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', event => {
        display = document.getElementById('display');
        actContent = display.textContent;
        let textOfPressedButton = event.target.textContent;
        if (event.target.classList.contains('number')) {
            if (operator == '') {
                a += textOfPressedButton;
                display.textContent = actContent + textOfPressedButton;
            } else {
                b += textOfPressedButton;
                display.textContent = actContent + textOfPressedButton;
            }

        } else if (event.target.classList.contains('operator')) {
            if (operator != '') {
                display.textContent = roundResult((operate(operator, a, b)).toString()) + textOfPressedButton;
                a = operate(operator, a, b);
                operator = event.target.id;
                b = '';
            } else {
                operator = event.target.id;
                display.textContent = actContent + textOfPressedButton;
            }

        } else if (event.target.classList.contains('equals')) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
            a = operate(operator, a, b);
            b = '';
        }
    })
})

document.getElementById('AC').addEventListener('click', function () {
    display = document.getElementById('display');
    operator = '';
    display.textContent = '';
    a = '';
    b = '';
})

document.addEventListener('keydown', event => {
    //console.log(parseInt(event.key));
    display = document.getElementById('display');
    actContent = display.textContent;
    let textOfPressedButton = event.key;
    if (!isNaN(parseInt(event.key)) || event.key == '.') {
        if (operator) { //operator nie jest pusty
            b = (b + textOfPressedButton);
            display.textContent = actContent + textOfPressedButton;
        } else {
            a = (a + textOfPressedButton);
            display.textContent = actContent + textOfPressedButton;
        }
    } else if (textOfPressedButton == '+' || textOfPressedButton == '-' || textOfPressedButton == '*' || textOfPressedButton == '/') {
        if (operator) {
            display.textContent = roundResult((operate(operator, a, b)).toString()) + textOfPressedButton;
            a = operate(operator, a, b);
            operator = textOfPressedButton;
            b = '';
        } else {
            operator = textOfPressedButton;
            display.textContent = actContent + textOfPressedButton;
        }
    } else {
        display.textContent = 'ERROR';
    }
})


document.getElementById('BS').addEventListener('click', function () {
    display = document.getElementById('display');
    if (display.textContent.slice(display.textContent.length - 1, display.textContent.length) == '+' || display.textContent.slice(display.textContent.length - 1, display.textContent.length)=='-' || display.textContent.slice(display.textContent.length - 1, display.textContent.length)=='/' || display.textContent.slice(display.textContent.length - 1, display.textContent.length)=='*'){
        display.textContent=display.textContent.substring(0, display.textContent.length - 1);
} else if (b) {
    b = b.toString().substring(0, b.toString().length - 1);
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
} else if (a) {
    a = a.toString().substring(0, a.toString().length - 1);
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}
})



