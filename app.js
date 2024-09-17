// const calSum = require("./sumFunctionWithCommonJsModule");
const Data = require("./data.json");
const mul = require("./calculation/multiply.js");
// import {sum} from "./sumFunctionWithEsModule.js";

var name = "Pranam node baba"
var age = 20;
// console.log(name);
// console.log(age);
// console.log(global)/*its a global object provide by node js */

// console.log(globalThis) /*its a global object provide by node js,but global is not working in the browser but globalThis will work in the browser */

console.log(global===globalThis) /*true */

console.log(this)/*this will throw a empty object in the vs code but it will open the global object in the browser */
 
// calSum(10,20); /*because modules protected their variables and function from leaking so to use the function calSum in this file you have to export this function in that file and import that function in this file*/

// sum(50,80);
mul(4,5);
console.log(JSON.stringify(Data.name))