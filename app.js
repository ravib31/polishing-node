var name = "Pranam node baba"
var age = 20;
// console.log(name);
// console.log(age);
// console.log(global)/*its a global object provide by node js */
console.log(globalThis) /*its a global object provide by node js,but global is not working in the browser but globalThis will work in the browser */

console.log(global===globalThis) /*true */

console.log(this)/*this will throw a empty object in the vs code but it will open the global object in the browser */
 