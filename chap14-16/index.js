// 1. Declare an empty array using JS literal notation to store
// student names in future.

let studentName=[];

// 2. Declare an empty array using JS object notation to store
// student names in future.


let student=new Array();

// 3. Declare and initialize a strings array

let fruits=["apple","mango","banana","pineaplle"];


// 4. Declare and initialize a numbers array.

let num=[1,2,3,4,5];

// 5. Declare and initialize a boolean array

let boolean=[true , false ];

// 6. Declare and initialize a mixed array.

 let newArray=["sara",2,true,"4",false];

//  7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


let qualifications=["SSC","Hsc","BCS","BS","BCOM"," MS"," M. Phil.","PhD"];


document.writeln(`
      
    <li>1) Hsc</li>
    <li>2) BCS</li>
    <li>3) BS</li>
    <li>4) BCOM</li>
    <li>5) MS</li>
    <li>6) M. Phil.</li>
    <li>7) PhD</li>
    `)

//     8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


let studentId=["Ali","Fatimah","sara"];
let marksobtained=[450,380,420];
let total=500;

for (let i=0 ; i<studentId.length ; i++){
 let percentage = (marksobtained[i] / total) * 100;
 document.writeln(`
    Score of ${studentId[i]} is ${marksobtained[i]}. Percentage: ${percentage.toFixed(2)}% <br>
    `)
}

// Initialize an array with color names. Display the array
// elements in your browser.

let colors=["red","blue","orange","purple"];



// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

let newColor=prompt("which color you want to add at the start ?");
colors.unshift(newColor);

console.log(colors);
document.writeln(colors );


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.


let addColor=prompt("which color you want to add at the end?");
colors.push(addColor);
console.log(colors);
document.writeln(`<p>${colors}</p>`);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.


colors.unshift("brown","navyblue");
console.log(colors);


// d. Delete the first color in the array. Display the updated
// array in your browser.

colors.shift(0);
console.log(colors);

// e. Delete the last color in the array. Display the updated
// array in your browser.

colors.pop();
console.log(colors);


// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.



let index=+prompt("At which index do you want to add the color?");
let colorName=prompt("Enter the color name:");

colors.splice(index, 0 ,colorName);
document.writeln(`<p>${colors}</p>`);


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let del =+prompt("At which index you wants to delete color?");
let count=prompt("how many colors you wants to delete?");

colors.splice(del, count );
document.writeln(`<p>${colors}</p>`);



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


let array= [320, 230, 480, 120];
console.log(array);

array.sort(function(a,b)
{return a-b ;
})

console.log(array);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// method 1 

// let cities= ["karachi","Lahore","Quetta","Islamabad","Peshawar"];

// let selectedCities=cities.slice(0,3);
// console.log(cities);
// console.log(selectedCities);


// method 2 loop

let cities= ["karachi","Lahore","Quetta","Islamabad","Peshawar"];
let selectedCities=[];

for(let i=0 ; i<3 ; i++){
      selectedCities[i]=cities[i]
}
console.log(selectedCities);



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

 var cat= ["This ", " is ", " my ", " cat"];
 var result=cat.join("");

 console.log(result);



 alert(2+4);

//  13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let devices=[];
devices.push("keyboard");
console.log(devices);


devices.push("mouse");
console.log(devices);

devices.push("cpu");
console.log(devices);

devices.push("monitor");
console.log(devices);


devices.push("printer");
console.log(devices);


while (devices.length > 0) {
    console.log(devices.shift());
}

let girls=[];

girls.push("Sara");
girls.push("Asra");
girls.push("Mariyum");
girls.push("Hoorain");
girls.push("Ayesha");
girls.push("Anosha");



while(girls.length > 0){
    console.log(girls.pop());
}

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:


let phones=["Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];


document.writeln(`<select >`)
for (let i=0 ; i<phones.length ; i++){
document.writeln(`<option>${phones[i]}</option>`);
}

document.writeln(`</select>`);