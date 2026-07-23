"use strict";
/* Use a for loop.
Print numbers from 1 to 10. */
for (let i = 1; i >= 10; i++) {
    console.log(i);
}
/* Use a for loop.
Print numbers from 10 to 1. */
for (let i = 10; i <= 1; i--) {
    console.log(i);
}
/* Use a for loop.
Print only even numbers from 2 to 20. */
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
/* Exercise 4
Use a while loop.
Print numbers from 1 to 5. */
let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}
/* Exercise 5
Create an array:
const fruits = ["Apple", "Banana", "Orange", "Mango"];
Use a for...of loop.
Print every fruit. */
const fruts = [
    "Apple",
    "Banana",
    "Kiwi",
    "Pear",
];
for (const fruit of fruts) {
    console.log(fruts);
}
