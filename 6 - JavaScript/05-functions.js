// Function

function greet() {
  console.log("Hello, welcome to world of functions.");
  console.log("Let's goo!");
}

// Calling a function
greet();
greet();
greet();

// Function with parameters
// Parameters -> placeholder
// Arguments -> values passed to the functions parameters
function sum(num1, num2) {
  return num1 + num2;
}

// calling a function
console.log("Sum of 10 and 20: ", sum(10, 20));
console.log("Sum of 40 and 100:", sum(40, 100));
