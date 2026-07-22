"use strict";
/* Create a function called:
checkAge
Parameter:
age: number
Rules:
If age is 18 or higher print:
"You can enter"
Otherwise print:
"You are too young"
Example:
checkAge(20);
checkAge(15); */
function checkAge(age) {
    if (age >= 18) {
        console.log("You can enter");
    }
    else {
        console.log("You are too young");
    }
}
checkAge(25);
checkAge(12);
/* Exercise 2 — User Role
Create a function called:
checkUserRole
Parameter:
role: string
Rules:
If role is "admin":
Print:
"Full access"
If role is "tester":
Print:
"Testing access"
Otherwise:
Print:
"No access"
Example:
checkUserRole("admin");
checkUserRole("tester");
checkUserRole("guest"); */
function checkUserRole(Role) {
    if (Role === "admin") {
        console.log("Full access");
    }
    else if (Role === "tester") {
        console.log("Testing access");
    }
    else {
        console.log("No access");
    }
}
checkUserRole("admin");
checkUserRole("tester");
checkUserRole("quest");
/* Create a function called:
login
Parameters:
username: string
password: string
Correct credentials:
username: "admin"
password: "password123"
If both values are correct:
Print:
"Login successful"
Otherwise:
Print:
"Invalid credentials"
*/
function login(username, password) {
    if (username === "admin" && password === "password123") {
        console.log("Login successful!");
    }
    else {
        console.log("Invalid credentials!");
    }
}
