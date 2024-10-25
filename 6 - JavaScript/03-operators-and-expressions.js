// Operators and Expressions

/////////////////////////////////////////////////

// 1.Arithmetic operators
let num1 = 10;
let num2 = 5;
console.log("Addition (+):", num1 + num2);

let num3 = 15;
let num4 = 6;
console.log("Subtraction (-):", num3 - num4);

let num5 = 3;
let num6 = 2;
console.log("Multiplication (*):", num5 * num6);

let num7 = 25;
let num8 = 5;
console.log("Division (/):", num7 / num8);

console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % 6);

// Order of Operations
// PEMDAS / BODMAS
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer:", answer);

/////////////////////////////////////////////////

// 2. String Expressions or Concatenation
let greeting = "Hi";
let firstName = "John";
console.log(greeting + " " + firstName + "!");

/////////////////////////////////////////////////

// 3. Comparison Operators
// Compare 2 values

// Equal to (==): Check if two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==):", num1 == num2);
console.log("Equal to with type coercion(==):", 5 == "5"); // Will return true. Comparing two diff data types -> type coercion: converts the data type if necessary.

// Not equal to (!=): check if two values are not equal
console.log("Equal to (!=):", 5 != 5);
console.log("Equal to (!=):", num1 != num2);
console.log("Equal to with type coercion(!=):", 5 != "5");

// Strict equal to (===): Check if two values are equal in value and in data type
console.log("Equal to (===):", 5 === 5);
console.log("Equal to (===):", num1 === num2);
console.log("Equal to (===):", 5 === "5");

// Strict not equal to (===): Check if two values are not equal in value and in data type
console.log("Equal to (!==):", 5 !== 5);
console.log("Equal to (!==):", num1 !== num2);
console.log("Equal to (!==):", 5 !== "5");

console.log("Greater than (>):", 5 > 3);
console.log("Less than (>):", 3 < 5);
console.log("Greater than or Equal to (>=):", 5 >= 3);
console.log("Greater than or Equal to (>=):", 5 >= 5);
console.log("Less than or Equal to (<=):", 3 <= 5);
console.log("Less than or Equal to (<=):", 3 <= 3);

/////////////////////////////////////////////////

// 4. Logical operators
// AND -> &&
// OR -> ||
// NOT -> !
// use to combine multiple conditions

let sunny = true;
let warm = true;

// AND: true if both boolean variables is true, otherwise false
console.log("It is sunny AND warm?", sunny && warm);

// OR: true if at least one of the variables is true, otherwise false
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: invert the value of boolean
console.log("NOT sunny.", !sunny);

/////////////////////////////////////////////////

// 5. Assignment Expression
// Assigning a value to a variable (=)
let num9 = 10;
let num10 = 5;

// Addition assignment (+=)
num9 += num10;
console.log("The new value of num9:", num9);

// Subtraction assignment (-=)
num9 -= num10;
console.log("The new value of num9:", num9);

// Multiplication assignment (*=)
num9 *= num10;
console.log("The new value of num9:", num9);

// Division assignment (/=)
num9 /= num10;
console.log("The new value of num9:", num9);

// Exponent assignment (**)
num9 ** num10;
console.log("The new value of num9:", num9);

// Remainder assignment (%=)
num9 %= num10;
console.log("The new value of num9:", num9);

// Get the percentage of a number
let number = 1000;
let percentage = 0.25;
console.log("25% of 1000:", number * percentage);
