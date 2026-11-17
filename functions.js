//function/Method is a block of code used to perform a task or calculate a value. It is executed when "something" invokes it (calls it). Functions are one of the fundamental building blocks in JavaScript. A function is defined with the function keyword, followed by a name, followed by parentheses ().
//1. Built-in functions: JavaScript provides many built-in functions that you can use to perform common tasks. For example, the `Math` object has several methods for performing mathematical operations, such as `Math.sqrt()` for calculating the square root of a number.
//2. User-defined functions: You can also create your own functions to perform specific tasks. A user-defined function is defined using the `function` keyword, followed by a name, followed by parentheses () and a block of code enclosed in curly braces {}.

let y = Math.max(16, 25, 36); // Built-in function to calculate the maximum of three numbers
let x = Math.min(16, 25, 36); // Built-in function to calculate the minimum of three numbers

console.log("The maximum number is: " + y);
console.log("The minimum number is: " + x);

// User-defined function to calculate the square of a number
function employee(){
    console.log("Mary Syokau is a software engineer at Tech Solutions Inc. She has been working in the field for 5 years and specializes in front-end development. Mary is passionate about creating user-friendly interfaces and is always eager to learn new technologies.");
}

employee();