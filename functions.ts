//Simple function

function greet(name: string) {
    console.log("Hello "+ name); 
}

greet("Anna"); //parameter 
greet("Tom");
greet("Tomasz");

//Function with multiple parameters

function introduce(name: string, age: number) {
    console.log(name + " is " + age + " years old.");
}

introduce("Eliza", 25);

//A function can also return a value instead of printing it.

function getUsername() {
    return "admin";
}

const username = getUsername();
console.log(username);

//Return with parameters

function add(a:number, b:number ) {
    return a+b
}

const results= add(5,7);
console.log(results);