function add(a, b) {
    let result = a + b;
    return result;
}

function subtract(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    return result;
}

function operate(operator, a, b) {
    if (operator == 'add') {
        return add(a, b);
    } else if (operator == 'subtract') {
        return subtract(a, b);
    } else if (operator == 'multiply') {
        return multiply(a, b);
    } else if (operator == 'divide') {
        return divide(a, b);
    }
}


let a = '';
let b = '';
let operator = '';

document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', function (event) {
        let actContent = document.getElementById('display').textContent
        let content = event.target.textContent;
        if (event.target.classList.contains('number')) {
            document.getElementById('display').textContent = '';
            document.getElementById('display').textContent = actContent + content;
        } else if (event.target.classList.contains('operator')) {
            a = +document.getElementById('display').textContent;
            operator = event.target.id;
            //console.log('a=' + a);
            //console.log('operator=' + operator);
            document.getElementById('display').textContent = '';
        } else if (event.target.classList.contains('equals')) {
            b = +document.getElementById('display').textContent;
            //console.log('operator=' + operator);
            //console.log('a=' + a);
            //console.log('b=' + b);
            document.getElementById('display').textContent = operate(operator, a, b);
        }
    })
})


