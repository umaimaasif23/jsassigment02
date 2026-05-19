// 1. Declare 3 variables in one statement

var jazz, ufone, zong 
// <---------------->//

// 2. Declare 5 legal & 5 illegal variable names.

// legal
let myName;
let _age;
let $price;
let user123;
let first_name;

// illegal

// let 123name;     
// let my name;     
// let var;        
// let first-name;  

// 3. Display this in your browser

document.writeln(`<h1>  “Rules for naming JS variables”</h1>
    <p>  Variable names can only contain <span>letters</span>
    <span>numbers</span> <span>$</span> <span>_</span></p>

<p> Variables must begin with a <span>$</span>, <span>_</span> or
<span>letter</span>. </p>

<p> Variable names are case <span>sensitive</span></p>

<p>Variable names should not be JS <span>keywords</span></p>
    
`)


////////////////////////////CHAP 05//////////////////////////////


// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let num1 = 10;
let num2 = 5;
let sum = num1 + num2

document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum);


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// Subtraction
let sub = num1 - num2;

// Multiplication
let mul = num1 * num2;

// Division
let div = num1 / num2;

// Modulus
let mod = num1 % num2;

document.writeln(`<p>sub of ${num1} and ${num2} is ${sub}</p>
<p>multiplication of ${num1} and ${num2} is ${mul}</p>
<p>division of ${num1} and ${num2} is ${div}</p>
<p>modulus of ${num1} and ${num2} is ${mod}</p>
`)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
let num


// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.writeln("Value after variable declaration is: num");

// c. Initialize the variable with some number.

num = 5



// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.writeln(`<p>Value after variable declaration is:  ${num}</p> `);

// e. Increment the variable


num++

// f. Show the value of variable in your browser like “Value
// after increment is: 6”

document.writeln(`<p>Value after increment is:  ${num}</p> `);


// g. Add 7 to the variable.

num += 7

// h. Show the value of variable in your browser like “Value
// after addition is: 13”.

document.writeln(`<p>Value after addition is:  ${num}</p> `);

// i. Decrement the variable.

num--;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.writeln(`<p>Value after decrement is:  ${num}</p> `);

// k. Show the remainder after dividing the variable’s value
// by 3. 

let remainder = num % 3;
document.writeln(`<p>Remainder after dividing by 3 is: ${remainder}</p>`);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie


var ticket = 600

ticket = ticket * 5

document.writeln(`total cost to buy 5 tickets to movie  is ${ticket}`);

// 5. Write a script to display multiplication table of any
// number in your browser. 

for (let i = 1; i <= 12; i++) {
    document.writeln(`
   
    <li> 2 x ${i}  = ${i * 2}</li>
    `)
}


// user se le kar table print karwana 


let uNum = +prompt("enter number");
let startNum = +prompt("enter start number");
let endNum = +prompt("enter end number");



// if (endNum > startNum){
//     for (i=startNum ; i <= endNum ; i++){
//         document.writeln(`${uNum} x ${i} =  ${uNum * i}` <br>)
//     }



// }

// else {
//     alert("Invalid Sequence")
// }




if (endNum > startNum) {
    for (i = startNum; i <= endNum; i++)
        document.writeln(`${uNum} x ${i} = ${uNum * i} <br>`)

}

else {
    alert("Invalid sequence!")
};




// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae


let celsius = +prompt("enter celsius");
let fahrenheit = (celsius * 9 / 5) + 32;


alert(`${celsius}
    
    ${celsius}°C is ${fahrenheit}°F
     `);






// 7. Write a program to implement checkout process of a
// shopping cart system for an e - commerce website.Store
// the following in variables
// a.Price of item 1
// b.Price of item 2
// c.Ordered quantity of item 1
// d.Ordered Quantity of item 2
// e.Shipping charges
// Compute the total cost & show the receipt in your browser.



let item1Price= 25;
let item2Price= 40;
let qtyItem1 = +prompt("enter quantity of 1st item");
let qtyItem2 = +prompt("enter quantity of 2nd item");
let shipping = 250;
let total = (item1Price * qtyItem1 ) + (item2Price * qtyItem2  ) + shipping;


document.writeln (`
    <h1>Shopping Cart Receipt</h1>
 <li>Price of item 1: ${item1Price} Rs</li>
 <li>Price of item 2: ${item2Price} Rs</li>
 <li>Quantity of item 1: ${qtyItem1}</li>
  <li>Quantity of item 2: ${qtyItem2}</li>
  <li>Shipping Charges: ${shipping} Rs </li>
  <hr>
  <h3>Total Cost: ${total} Rs</h3>

    `);



// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


let totalMarks = 800;
let marksObtained = 645;
let percentage = (marksObtained / totalMarks) * 100;

document.writeln(`
    <h1>Student Marks Percentage</h1>

     <li>Total marks : ${totalMarks} </li>
<li> Marks Obtained  : ${marksObtained} </li> <hr>
<li>  Percentage secured : ${percentage } % </li>
    
    
    `)


//     9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)



let usd=10;
let sar=25;
let usdRate=104.0;
let sarRate=28;
total=(usd * usdRate ) + (sar * sarRate );


document.writeln (`
    
    <h1>Currency Conversion</h1>
 <p>US dollars :${usd}$</p>
  <p> Saudi Riyals :${sar}Riyals</p>
  <p>Conversion Rate of Usd  :${usdRate}  Pakistani Rupees</p>
<p>Conversion Rate of Saudi Riyal :${sarRate}  Pakistani Rupees</p>
<p>The total currency to Pakistani Rupees : ${total} PKR</p> <hr>


    
    
    `)


//     10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression



let number=5;
let result=(number+5)*10 /2 ;
document.writeln(`
    <h1>Arithmetic Calculation</h1>

    <p>${number} +5 x 10 / 2 = ${result}</p><hr>
    
    `)


//     11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.


let year=2026;
let birthYear =+prompt("Enter your Birth Year!");
let calculate= year - birthYear;
let age2=calculate-1;


alert(
    ` Age Calculator
 Current year is ${year}
 Your birth Year is ${birthYear} 
 So your Current Age is ${calculate} or ${age2}Years

     `
)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


let radius=+prompt("Enter Radius");
let pi=3.14;
let circum=2*pi*radius;
let area=pi*radius*radius;


document.writeln(`
    <h1>The Geometrizer</h1>
<p>The circumference of a circle is ${circum}</p>
<p>The area of a circle is ${area}</p>
    `)



    













    