// 1. Declare and initialize an empty multidimensional array. (Array of arrays) is ko explain karo

let arr=[[1,2,3,4],["a","b","c","d"],[undefined]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


let num=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]


// 3. Write a program to print numeric counting from 1 to 10.

for (let i=1 ; i<=10 ; i++){
     document.writeln(`${i}  <br>`)
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let number=+prompt("enter a number to show its multiplication table");
let lenght=+prompt("Enter length of multiplication table");


for (let i=1 ; i<=lenght ; i++){
  document.writeln(`${number} x ${i}=${i*number} <br>`)
}

// 5. Write a program to print items of the following array
// using for loop:
//  fruits = [“apple”, “banana”, “mango”, “orange”,
//  “strawberry”]


let fruits=["apple","banana","mango","orange","strawberry"]


for (let i=0 ; i <fruits.length ; i++){

document.writeln(`${fruits[i]} <br> `)



}


for (let i=0 ; i <fruits.length ; i++){

// document.writeln(`${fruits[i]} <br> `)

document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);

}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for(let i=1; i<=10 ; i ++){
   document.writeln(` ${i} <br>` )
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for(let i=10 ; i >=1 ;i--){
 document.writeln(` ${i} , `)
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for(let i=0; i<=20 ; i++){
   if( i % 2===0){
       document.writeln(` ${i} <br>`)
   }
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for(let i=0; i<=20 ; i++){
   if( i % 2!==0){
       document.writeln(`${i} ,`)
   }
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for(let i=2; i<=20 ; i+=2){
 document.writeln(`${(i)}k<br>`)
}




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// let items=["cake","apple pie", "cookie", "chips" ,"patties"];
// let userInput = prompt("Welcome! What do you want to order?");
// let found=false;
// for (let i=0 ; i<items.lenght ; i++){
//         if( items[i]===userInput){
//          found=true;
//          break;
//         }
// }

// if (found === true ){
//   console.log(`${userInput} is available`);
// }

// else{
//    console.log(`${ userInput} is not available`);
// }


 let items=["cake","apple pie", "cookie", "chips" ,"patties"];
 let userInput = prompt("Welcome! What do you want to order?").toLowerCase();
let found=false;
for (let i=0 ; i<items.length ; i++){
        if( items[i]===userInput){
         found=true;
         break;
        }
}

if (found === true ){
  console.log(`${userInput} is available`);
}

else{
   console.log(`${ userInput} is not available`);
}






// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let A = [24, 53, 78, 91, 12];
let largest=A[0];

for (let i=1 ; i<A.length ; i++){
if (A[i] > largest) {
largest=A[i]
}

}

console.log(`The largest number is ${largest}`)




// 9. Write a program to identify the smallest number in the
// given array.
 let B = [24, 53, 78, 91, 12];
 let smallest=B[0];

 for(let i=1 ; i<B.length ;i++){

if (B[i] <  smallest){
  smallest=B[i]
}

 }
 console.log(`The smallest number is ${smallest}`);


//  10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (let i=5 ; i<=100 ; i++){
   if (i%5===0){
       document.writeln(`${i} <br>`)
   }
}