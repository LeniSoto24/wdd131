// Type conversion = change datatype os a value to anoter
//                      (strings, numbers, booleans)

let age = window.prompt("How old are you?");
// With this function we can convert a string to a number
age = Number(age);
// Without the Number() function the value continues as a string.
age += 1;

console.log(age);

let x = pizza;
let y = pizza;
let z = pizza;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);