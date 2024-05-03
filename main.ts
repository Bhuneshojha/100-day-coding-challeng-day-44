//          100 days of coding challenge ( DAY 44 )

// Question 01  
// --In another file where you want to use the add function:
import { add } from "./mathFunction";

console.log(add(2, 3)); // --Outputs: 5
// --Demonstrates importing the add function from mathFunctions.ts and using it.

// Question 02
// --In another file where you want to use the add function:
import { person } from "./person";

const kumar = new person("Kumar");
kumar.greet(); // --Outputs: Hello, my name is kumar
// Question 03 
// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// --Importing a default export:
import Calculator from "./calculator";

// --This code illustrates the syntax and usage differences between default and named exports.
