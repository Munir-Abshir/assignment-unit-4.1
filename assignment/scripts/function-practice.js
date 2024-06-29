console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  let greeting = 'Hello,' + " " + name + "!";
  return greeting;
}
// Remember to call the function to test
console.log(helloName("Munir"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, num2) {
  let answer = firstNumber + num2
  return answer;
  
  // return firstNumber + secondNumber;
}

console.log(addNumbers(39,61));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3) {
let times = num1 * num2 * num3;
return times;
}
console.log(multiplyThree(9,6,2));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(99));
console.log(isPositive(0));
console.log(isPositive(-99));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let shows = ['remote','tv','netflix','iphone','laptop'];
function getLast(array) {
  let lastItem = array[array.length - 1];
return lastItem;
}
console.log(getLast(shows));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let tvshows = ['remote','tv','netflix','iphone','laptop'];

function find(value,array) {
for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
    return true;
  } 

    
  }
  {
    return false;
  }
}



console.log(find('iphne',tvshows));
console.log(find('tv',tvshows));
console.log(tvshows[2]);
console.log(find('tvS',tvshows));
console.log(find('netflix',tvshows));
console.log(find('remote',tvshows));






























// console.log(find(tvshows,'iphne'));
// console.log(find(tvshows,'iphone'));
// console.log(find(shows,"netflix"));


// function find(array,value) {
//   for (let item of array) {
//         if (item === value) {
//          return true;
//         } else {
//           return false;
//         }
//   }
//   }







// let i;
// function find( value, array) {
// while ( 0  < i < array.length) {
// if (array[i] == value) {
//   return true;
// } if (array[i] != value) {
//   return false;
// } else {
//   return "Nah";
// }

// }

// }

// console.log(find( 'iphone', shows));








// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string){
let arrayHolder = string.split("");
for ( let i = 0; i < arrayHolder.length; i++) {
if (letter === arrayHolder[i]) {
  return true;
}
}
{
  return false;
}
}
//console.log("start");
console.log(find("i",'iphne'));
console.log(find('j','iphone'));
console.log(find('n',"netflix"));



// 9. Function to return the sum of all numbers in an array
let numbers = [1,2,3,4];

// let sum = "The sum of all numbers ="


function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  
return sum;
}
console.log("here");
console.log(sumAll(numbers));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let numbers22 = [-1,-3,0,4,55,10,2,0.2,-4];

function allPositive(array) {
  let newArray = [];
for (let pup of array) {
  if (pup > 0) {
    newArray.push(pup);
  }
}
return newArray;
}

console.log(allPositive(numbers));
console.log(allPositive(numbers22));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
