// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let char=prompt("Enter a single character");
let ascii=char.charCodeAt(0);


if(ascii >= 48 && ascii <= 57 ){
 console.log("this is a number");
 
}else if (ascii >= 65 && ascii <= 90) {
    console.log;
    ("This is an uppercase letter");
   } else if (ascii >= 97 && ascii <= 122) {
     console.log("This is a lowercase letter");
} else {
   console.log("This is some other character");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

let num1=+prompt("enter 1st number");
let num2=+prompt("enter 2nd number");

if(num1 > num2){
    document.writeln(`${num1} is greater than ${num2}`);
} else if ( num2 > num1){
     document.writeln(`${num2} is greater than ${num1}`);
}
else{
    document.writeln("both are equal")
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


let uNum=+prompt("Enter number");


if(  uNum > 0){
     alert("This is a positive integer");
} else if (  uNum < 0 ){
    alert("This is a negative integer");
}

else {
    alert("This is a 0");
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


let character=prompt("Enter a Vowel ").toLowerCase();

if ( character === "a" ||
   character === "e" ||
   character === "i" ||
   character === "o" ||
   character === "u" 
){
      alert("True ! Its a vowel")
}
else {
    alert("false ! its a consonant!")
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// let correctPassword="12345";
// let userPassword=prompt("Enter password");

// if(!userPassword){
//    alert("plaese enter password")
// } else if (userPassword.toLowerCase()===correctPassword.toLowerCase()){
//  alert("Correct! The password you entered matches the original password")
// }else {
//     alert("Invalid Password!")
// }



// advance version

let correctPassword="ABC123"
let maxTries=3;

for(let attempts=0 ; attempts<maxTries ; attempts++){
let userPassword=prompt("enter your password");

if (! userPassword){
    alert("Please enter Password");
}

else if (userPassword.toLowerCase===correctPassword.toLocaleLowerCase){
alert("correct ! the password you enter matches original Password !");

break;
}

alert("Invalid Password");
if (attempts===maxTries-1){
alert("you have reached the maximum limit")
}

}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = +prompt("enter hour")

if (hour < 18){
    console.log("good day");
}else {
console.log("good evening");
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Enter time in 24-hour format");

if (time >= 0 && time < 1200) {
    console.log("Good morning");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
}
else {
    console.log("Invalid time");
}