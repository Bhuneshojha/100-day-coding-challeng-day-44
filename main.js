"use strict";
//          100 days of coding challenge ( DAY 44 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01  
// --In another file where you want to use the add function:
const mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 3)); // --Outputs: 5
// --Demonstrates importing the add function from mathFunctions.ts and using it.
// Question 02
// --In another file where you want to use the add function:
const person_1 = require("./person");
const kumar = new person_1.person("Kumar");
kumar.greet(); // --Outputs: Hello, my name is kumar
// This code illustrates the syntax and usage differences between default and named exports.
