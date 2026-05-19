// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


let city=prompt("Enter city name").toLowerCase();

if(city=="karachi"){
   alert("Welcome to city of lights") 
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am
 let gender=prompt("Enter your gender").toLowerCase();

 if(gender=="male"){
  alert("Good Morning Sir");
 }

 else{
    alert("Good Morning Ma’am");
 }

//  3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


let color=prompt(`Enter color of road traffic signal from
    1.Red 
    2.Yellow
    3.Green`).toLowerCase();


    if(color=="red"){
         alert("MUST STOP!");
         }else if (color=="yellow"){
              alert("Ready to Move");
         }
         else if(color=="green"){
            alert("Move Now")
         }


//          4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

let remainingFuel=+prompt("Enter the remaining amount of fuel in liters");

if ( remainingFuel<=0.25){
  alert("Please refill the fuel in your car");
} else {
    alert("you are good to go !");
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// it is a post increment 


 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// condition 2 and 4 are true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
//   alert 1 and 2 will run because the condition is true 
 if("car" < "cat"){
alert("car is smaller than cat");
}
// JavaScript alphabetically (dictionary order) compare karta hai.
// Position	Word 1	Word 2
// 1	c	c
// 2	a	a
// 3	r	t

// Pehle 2 letters same hain.

// Ab third letter compare hoga:

// r < t

// Alphabet order:

// r comes before t

// ✅ Condition true hai.

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

let sub1 = +prompt("Enter marks of subject 1");
let sub2 = +prompt("Enter marks of subject 2");
let sub3 = +prompt("Enter marks of subject 3");

let totalMarks = +prompt("Enter total marks");
let obtained = sub1 + sub2 + sub3;
let percentage = (obtained / totalMarks) * 100;

let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.writeln(`
  <h1>Marks Sheet</h1>

<table border="1" cellpadding="10">

<tr>
<th>Total Marks</th>
<th>Marks Obtained</th>
<th>Percentage</th>
<th>Grade</th>
<th>Remarks</th>
</tr>

<tr>
<td>${totalMarks}</td>
<td>${obtained}</td>
<td>${percentage}%</td>
<td>${grade}</td>
<td>${remarks}</td>
</tr>

</table>
  `)

//   7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.