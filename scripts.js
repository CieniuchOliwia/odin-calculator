function add(a, b) {
    let sum = a + b;
    return sum;
}

function subtract(a, b) {
    let difference = a - b;
    return difference;
}

function multiply(a, b) {
    let product = a * b;
    return product;
}

function divide(a, b) {
    let quotient = a / b;
    return quotient;
}

function operate(operator, a, b) {
    let result = operator(a, b);
    return result;
}



document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', function (event) {
        let actContent=document.getElementById('display').textContent
        let content = event.target.textContent;
        document.getElementById('display').textContent=actContent+content;
    })
})