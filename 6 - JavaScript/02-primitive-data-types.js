// Primitive Data Types
// in Javascript, it will automatically detects data type.
// Javascript is an object oriented programming language

// String: textual data enclose in "" or ''
let firstName = "John";
console.log("Firstname:", firstName);
// to know what data type, use the typeOf keyword
console.log("Data type:", typeof firstName);

// Number: represents numerical value (eg. 30, -30, 3.14, -3.14)
let age = 30;
console.log("Age:", age);
console.log("Data type:", typeof age);

// Boolean: true or false
let isStudent = true;
console.log("Is Student:", isStudent);
console.log("Data type:", typeof isStudent);

// Null: Intentional absence of value
let car = null;
console.log("Car", car);
console.log("Data type:", typeof car);
car = "AE86";
console.log("Car", car);
console.log("Data type:", typeof car);

let number = null;
console.log((number = number + 1));
console.log("Number:", number);
console.log("Data type:", typeof number);

// Undefined: unintentional absence of value
let city;
console.log("City:", city);
console.log("Data type:", typeof city);
