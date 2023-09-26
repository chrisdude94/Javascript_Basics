/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/



function checkOddOrEven(number) {
    return (number | 1) === number ? 'Odd' : 'Even';
}
  
console.log(checkOddOrEven(2));
console.log(checkOddOrEven(5));



/*
2.

Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
*/


const userMale = true;
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle)



/*
3.

Write a function that takes in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Good night (name received)" if the hour received is 0-6
"Good morning (name received)" if the hour received is 6-12
"Good day (name received)" if the hour received is 12-18
"Good evening (name received)" if the hour received is 18-24
"Invalid time" if the hour received is greater than 24

Use whichever function syntax you want.
Use template literal in your return: `This is a template literal ${variable}`

Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
Console log the function a few times to show that it's working.
*/

function time(name, hour) {
    if (hour >= 0 && hour < 6) {
      return `God natt, ${name}`;
    } else if (hour >= 6 && hour < 12) {
      return `God morgen, ${name}`;
    } else if (hour >= 12 && hour < 18) {
      return `God dag, ${name}`;
    } else if (hour >= 18 && hour < 24) {
      return `God kveld, ${name}`;
    }
}

console.log(time("Mari-Johanna", 6));
console.log(time("Jannike", 12));
console.log(time("Tarald", 9));
console.log(time("Jank-Arne", 18));

/*

4.

Write a function that takes in 2 numbers as parameters.

In your function, check which of the numbers received is the largest,
then return the sum of the largest number divided by the smaller.

Use arrow function syntax.

Example: your function receives 13 and 24, it should return the sum of 24/13

*/

const calculate = (num1, num2) => {
const largest = Math.max(num1, num2);
const smallest = Math.min(num1, num2);
return largest / smallest;
};
  
console.log(calculate(13, 24));  
console.log(calculate(5, 10)); 


/*
5.

Write an IF/ELSE conditional statement that checks whether username is empty,
that the user age is 18+, and that userIsBlocked is false.

(HINT: Use the && (logical AND) to check several things in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true and
and the goToPage variable to "/home" then console.log a welcome message.

If any of the conditions for logging in are not met, console.log an error message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly
*/

let username = ""; 
let userAge = 25;   
let userIsBlocked = false;  
let userIsLoggedIn = true;
let goToPage = "";

if (username !== "" && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = false;
  goToPage = "/home";
  console.log("Welcome! User is logged in.");
} else {
  console.log("Error: Unable to log in. Check username, age, or block status.");
}

/*
6.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make a function called coolMaker that takes in 1 parameter.

If the parameter received is a string:
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

Use arrow function syntax.

Console log the function call with a few different datatypes to show that it's working
*/

const coolMaker = (param) => {
    if (typeof param === 'string') {
      return `😎${param}😎`;
    } else if (typeof param === 'number') {
      const doubledNumber = param * 2;
      return `😎${doubledNumber.toString()}😎`;
    } else if (typeof param === 'boolean') {
      return param ? '😎Yeah😎' : '😎Chill😎';
    } else {
      return '😎Primitive values only😎';
    }
  };
  
 
console.log(coolMaker('Hello'));     
console.log(coolMaker(20));          
console.log(coolMaker(true));        
console.log(coolMaker(false));       
console.log(coolMaker({}));   