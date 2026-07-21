//Create an object called user.
//Properties:
//firstName
//lastName
//age
//isStudent
//Print every property separately.

const user = {
    firstName: "Eliza",
    lastName: "Dubiel",
    age: 25,
    isStudent: true
};

console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.isStudent);

//Create an object called book.
//Properties:
//title
//author
//pages
//isAvailable
//Then:
//print the title
//print the whole object

const book =  {
    title: "Anna Boylen",
    author: "Robert Saymour",
    pages: 230,
    isAvaliable: true
};

console.log(book.title);
console.log(book);


//Create an object called movie.
//Properties:
//title
//director
//releaseYear
//rating
//Print a sentence using the object's properties.

const movie = {
    title: "Lalalaland",
    director: "Steven Siegal",
    releaseYear: 2025,
    rating: 4
};

console.log( movie.title + " was directed by " + movie.director + " and was released in " + movie.releaseYear);


