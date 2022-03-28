let a = '';
let b = '';
let operator = '';
let display='';
let roundedResult='';
let indexOfComma='';

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
    return (a / b);
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

function roundResult(result){
    if(result.length>10 && Number.isInteger(result)==false){
        indexOfComma=result.indexOf('.');
        return roundedResult=Math.round(result*Math.pow(10,9-indexOfComma))/(Math.pow(10,9-indexOfComma));
    }else{
        return result;
    }
}


document.querySelectorAll('.button').forEach(el => {
    el.addEventListener('click', event=> {
        display=document.getElementById('display');
        let actContent = display.textContent
        let textOfPressedButton = event.target.textContent;
        if (event.target.classList.contains('number')) {
            if(operator==''){
                a=Number(a+textOfPressedButton);
                display.textContent = actContent+textOfPressedButton;
            }else if (operator!=''){
                b=Number(b+textOfPressedButton);
                display.textContent =actContent+textOfPressedButton; 
            }
            
        } else if (event.target.classList.contains('operator')) {
            if(operator!=''){
                display.textContent=roundResult((operate(operator,a,b)).toString())+textOfPressedButton;
                a=operate(operator,a,b);
                operator = event.target.id;
                b=0;
            }else{
                operator = event.target.id;
                display.textContent = actContent+textOfPressedButton;
            }
  
        } else if (event.target.classList.contains('equals')) {
            display.textContent = roundResult((operate(operator, a, b)).toString());
        }
    })
})

document.getElementById('AC').addEventListener('click',function(){
    operator='';
    display.textContent='';
    a='';
    b='';
})




