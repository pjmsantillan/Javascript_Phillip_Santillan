const addition = (a,b) => a+b;

const subtraction = (a,b) => a-b;

const multiplication = (a,b) => a*b;

const division = (a,b) => a/b;



const ToDo = () =>{
    let firstnum = document.getElementById('firstnum').value;
    let secondnum = document.getElementById('secondnum').value;

    // Convert the input values to numbers
    let firstnumber = parseInt(firstnum);
    let secondnumber = parseInt(secondnum);

    // Perform the calculation using the addition function
    let sum = addition(firstnumber, secondnumber);
    let difference = subtraction(firstnumber, secondnumber);
    let product = multiplication(firstnumber, secondnumber);
    let quotient = division(firstnumber, secondnumber);

    // Display the result
    document.getElementById('sum').innerText = sum;
    document.getElementById('difference').innerText = difference;
    document.getElementById('product').innerText = product;
    document.getElementById('quotient').innerText = quotient;
}


