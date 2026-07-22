"use strict";
//Create a function called:
//welcome
//It should print:
//Welcome to TypeScript!
//Call the function three times.
function sayHello() {
    return "Welcome to Type Script";
}
const Hello = sayHello();
console.log(Hello);
console.log(Hello);
console.log(Hello);
//Create a function called:
//favoriteGame
//The function should have one parameter:
//game
//Print:
//My favorite game is Minecraft.
//Replace Minecraft with the value passed as an argument.
//Call the function three times using different games.
function favoriteGame(game) {
    console.log("My favorite game is " + game);
}
favoriteGame("Minecraft");
favoriteGame("Fallout");
favoriteGame("Roblox");
//Create a function called:
//calculateArea
//Parameters:
//width
//height
//turn the rectangle area.
//Store the result in a variable and print it.
function calculateArea(width, height) {
    return width * height;
}
const result = calculateArea(8, 10);
console.log(result);
