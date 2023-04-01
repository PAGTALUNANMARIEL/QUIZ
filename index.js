



let button = document.getElementById('btn');
button.addEventListener('click', calc);

numberOne = Number(numberOne);
numberTwo = number(numberTwo);

function calc(){
    
    switch(operator){
        case '+':
            document.getElementById("answer").innerHTML = numberOne + numberTwo;
            break;
        case '-':
            document.getElementById("answer").innerHTML = numberOne - numberTwo;
            break;
        case '*':
            document.getElementById("answer").innerHTML = numberOne * numberTwo;
            break;
        default:
            document.getElementById("answer").innerHTML = "invalid input"

    }
}