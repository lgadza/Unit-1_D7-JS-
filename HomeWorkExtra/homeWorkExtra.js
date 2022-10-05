// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let gender = "male";
let isMale = gender === "male" ? true : false;
console.log(isMale);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
let num1; // = 0;
let num2; // = 0;
if (num1 === 8 && num2 === 8) {
  console.log(`The value of both num1 and num2 is 8 `);
} else if (num1 === 8) {
  console.log(`The value of num1  is 8 `);
} else if (num2 === 8) {
  console.log(`The value of num2  is 8 `);
} else if (num1 + num2 === 8) {
  console.log(`The sum of num1 and num2 is equal to 8`);
} else if (num1 - num2 === 8 || num2 - num1 === 8) {
  console.log(`The subtraction of the two integers is equal to 8`);
} else {
  console.log("Non of num1 or num2 is equal to 8 and,");
  console.log(
    "The addition or subtraction  of num1 and num2 is not equal to 8"
  );
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */
let str1; //= "Lou";
let str2; //= "is";
let myName = str1 + str2;
//console.log(myName);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
let x; //= 0;
let y; //= 0;
let z; //= 7;
if (x === y && x === z) {
  console.log(`All the values are equal`);
} else if (x >= y && x >= z) {
  if (y >= z) {
    console.log(`x, y, z`);
  } else {
    console.log(`x, z, y`);
  }
} else if (y >= x && y >= z) {
  if (x >= z) {
    console.log(`y, x, z`);
  } else {
    console.log(`y, z, x`);
  }
} else if (z >= y && z >= x) {
  if (y >= x) {
    console.log(`z, y, x`);
  } else {
    console.log(`z, x, y`);
  }
}
/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
let int1; // = 10;
let int2; // = 2;
let average = (int1 + int2) / 2;
//console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
let string1 = "Louis Gadza";
let string2 = "Nombulelo Ndebele";
if (string1.length > string2.length) {
  console.log(`string1 is longer than string2`);
} else if (string1.length === string2.length) {
  console.log(`Both strings have the same length`);
} else {
  console.log(`string2 in longer that string1`);
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */
let isInt; // = "8";
if (typeof isInt === "number") {
  console.log(true);
} else {
  console.log(`The value is not an integer`);
}
/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */
let number; //= 15;
let percent; //= 50;
let percentageOfNumber = (percent / 100) * number;

//console.log(percentageOfNumber);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
let num; //= 7;
if (num % 2 === 0) {
  console.log(`num is even`);
} else {
  console.log(`num is old`);
}
