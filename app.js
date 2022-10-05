/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE 

a)Strings --> this is any sequence of characters inclosed in a single or double cots eg "LOuis", "24"

b) numbers --> it is a numerical value, e.g 2, 5 but "5" is not a number because it is enclosed in cots. numbers can either be float or an integer
c) Boolean --> this is true or false, these are the only two possible values for a boolean. if true or false are put in cots then they instantly become strings.

*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words
 
*/

/* WRITE YOUR ANSWER HERE 

a variable is any thing that is declared to hold the data, it is like a container that can carry any inputs put in it..

*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

//WRITE YOUR ANSWER HERE

let num1 = 12;
let num2 = 20;

let sum = num1 + num2;
console.log(sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

let y = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE*/
let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE*/

let result = 12 - y;
console.log(result);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE*/

let name1 = "john";
let name2 = "John";
if (name1 !== name2) {
  console.log(`name1 is different from name2`);
  console.log(true);
}

if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log(`name1 is the same as name2 when both are lowercase`);
}

//TODO
/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE*/

let x = 7;
let literalValue =
  x === 1
    ? `One`
    : x === 2
    ? `Two`
    : x === 3
    ? `Three`
    : x === 4
    ? `Four`
    : x === 5
    ? `Five`
    : x === 6
    ? `Six`
    : x === 7
    ? `Seven`
    : x === 8
    ? `Eight`
    : x === 9
    ? `Nine`
    : x === 10
    ? `Ten`
    : `not below 10`;
console.log(literalValue);
// }

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE*/
let temp = -7;
let temperature =
  temp >= 35
    ? `Do not go outside, it is hot`
    : temp > 15 && temp < 35
    ? `You can go and enjoy yourself outside, the weather is great!`
    : temp < 0
    ? `Do not go outside, it is freezing`
    : `Stay indoors`;

console.log(temperature);
