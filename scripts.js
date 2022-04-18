let a = '';
let b = '';
let operator = '';
let display = '';
let roundedResult = '';
let actContent = '';
let displayB='';
let displayOperator='';


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
        alert("You can't divide by 0!"); // jak zzmeniam operator z / na inny to psuje sie :)
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
        displayB=document.getElementById('displayForB');
        actContentB=displayB.textContent;
        displayOperator=document.getElementById('displayForOperator');
        
        let textOfPressedButton = event.target.textContent;
        if (event.target.classList.contains('number')) {
            if (operator == '') {
                a += textOfPressedButton;
                display.textContent = actContent + textOfPressedButton;
            } else {
                b += textOfPressedButton;
                displayB.textContent = actContentB + textOfPressedButton;
            }

        } else if (event.target.classList.contains('operator')) {
            if (operator != '') {
                display.textContent = roundResult((operate(operator, a, b)).toString());
                displayOperator.textContent=textOfPressedButton;
                displayB.textContent='';
                a = operate(operator, a, b);
                operator = event.target.id;
                b = '';
            } else {
                operator = event.target.id;
                displayOperator.textContent = textOfPressedButton;
            }

        } else if (event.target.classList.contains('equals')) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
            displayB.textContent='';
            displayOperator.textContent='';
            a = operate(operator, a, b);
            b = ''; // problem->jesli zrobię *, potem = i xnowu *->zamiast a mam 0 w wyświetlaczu
            operator='';
        }
    })
})

document.getElementById('AC').addEventListener('click', function () {
    display = document.getElementById('displayForA');
    displayB = document.getElementById('displayForB');
    displayOperator = document.getElementById('displayForOperator')
    operator = '';
    display.textContent = '';
    displayB.textContent='';
    displayOperator.textContent='';
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
        if (operator) { //operator nie jest pusty
            b = (b + textOfPressedButton);
            displayB.textContent = actContentB + textOfPressedButton;
        } else {
            a = (a + textOfPressedButton);
            display.textContent = actContent + textOfPressedButton;
        }
    } else if (textOfPressedButton == '+' || textOfPressedButton == '-' || textOfPressedButton == '*' || textOfPressedButton == '/') {
        if (operator) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
            a = operate(operator, a, b);
            operator = textOfPressedButton;
            displayOperator.textContent=textOfPressedButton;
            b = '';
            displayB.textContent='';
        } else {
            operator = textOfPressedButton;
            displayOperator.textContent = textOfPressedButton;
        }
    } else if (textOfPressedButton == '=') {
        display.textContent = roundResult((operate(operator, a, b)).toString());
        a = operate(operator, a, b);
        b = '';
        operator='';
        displayB.textContent='';
        displayOperator.textContent='';
    }
})



document.getElementById('BS').addEventListener('click', function () {
    display = document.getElementById('displayForA');
    if (display.textContent.slice(display.textContent.length - 1, display.textContent.length) == '+' || display.textContent.slice(display.textContent.length - 1, display.textContent.length) == '-' || display.textContent.slice(display.textContent.length - 1, display.textContent.length) == '/' || display.textContent.slice(display.textContent.length - 1, display.textContent.length) == '*') {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else if (b) {
        b = b.toString().substring(0, b.toString().length - 1);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    } else if (a) {
        a = a.toString().substring(0, a.toString().length - 1);
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
})





