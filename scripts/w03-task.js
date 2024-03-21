/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2)
{
    let result;
    return result = number1 + number2;
}

function addNumbers(add1, add2)
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    return document.querySelector('#sum').value = add(addNumber1, addNumber2);


}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
let sub = function(number1, number2)
{

    return number1 - number2;
};
function subtractNumbers()
{
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    return document.querySelector('#difference').value = sub(subtractNumber1, subtractNumber2);


}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

let multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(factor1, factor2)
{
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(dividend, divisor)
{
    return dividend / divisor;

}

function divideNumbers()
{
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function()
{
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMember = document.getElementById("member").checked;
    const total = isMember ? subtotal * 0.8 : subtotal;

    document.getElementById("total").textContent = `${total.toFixed(2)}`;

})

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let myNumbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("array").innerHTML = myNumbersArray.join(", ");

/* Output Odds Only Array */
document.querySelector("odds").innerHTML = myNumbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector("evens").innerHTML = myNumbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("sumOfArray").innerHTML = myNumbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("multiplied").innerHTML = myNumbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
multipliedElement = myNumbersArray.map(number => number * 2);
document.querySelector("#sumOfMultied").innerHTML = multipliedElement.reduce((sum, number) => sum + number);
