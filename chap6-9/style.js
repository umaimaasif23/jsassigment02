// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

let a = 10;

document.writeln("Result:<br>");
document.writeln("The value of a is: " + a);
document.writeln("<br>----------------------------------<br><br>");

// Pre-increment
document.writeln("The value of ++a is: " + (++a) + "<br>");
document.writeln("Now the value of a is: " + a);
document.writeln("<br><br>");

// Post-increment
document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a);
document.writeln("<br><br>");

// Pre-decrement
document.writeln("The value of --a is: " + (--a) + "<br>");
document.writeln("Now the value of a is: " + a);
document.writeln("<br><br>");

// Post-decrement
document.writeln("The value of a-- is: " + (a--) + "<br>");
document.writeln("Now the value of a is: " + a + "<br>");


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


var c = 2;
var b=1;
var result= --c - --b + ++b + b--;

console.log("Final value of c: " + c);
console.log("Final value of b: " + b);
console.log("Final value of result: " + result);


// 3. Write a program that takes input a name from user &
// greet the user

let userName=prompt("your nice name please!").toUpperCase();
alert("Hello " + userName + "  Welcome! ");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

let number=+prompt("enter your number",5);

for (var i=1; i<=10; i++){
document.writeln(`${number}x${i}=${i*number}<br>`)
}

// 6. Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table) 


let sub1 = prompt("Enter first subject name").toUpperCase();
let sub2 = prompt("Enter second subject name").toUpperCase();
let sub3 = prompt("Enter third subject name").toUpperCase();
let totalMarks = 100;
let marks1 = +prompt("Enter obtained marks for " + sub1);
let marks2 = +prompt("Enter obtained marks for " + sub2);
let marks3 = +prompt("Enter obtained marks for " + sub3);
let total = totalMarks * 3;
let obtained = marks1 + marks2 + marks3;
let percentage = (obtained / total) * 100;

document.writeln(`
    <table>
<tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
</tr>
<tr>
    <td>${sub1}</td>
    <td>${totalMarks}</td>
    <td>${marks1}</td>
</tr>

<tr>
<td>${sub2}</td>
    <td>${totalMarks}</td>
    <td>${marks2}</td>
</tr>


<tr>
<td>${sub3}</td>
    <td>${totalMarks}</td>
    <td>${marks3}</td>
</tr>

<tr>
<td></td>
    <td>${total}</td>
    <td>${obtained}</td>
</tr>

<tr>
    <td colspan="3">Percentage:${percentage}%</td>
</tr>
</table>
    `)