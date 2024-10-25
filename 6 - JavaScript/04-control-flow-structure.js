// Control Flow Structures
// allows us to control the flow of the program

////////////////////////////////////////////

// 1. Conditional Statements
// Conditional: if, else if, else
// () - Conditional Block
// {} - Code Block

let temperature = 25;

if (temperature < 0) {
  console.log("Temperature is less than 0.");
  console.log("It's freezing!");
  console.log("Bring a jacket");
} else if (temperature >= 0 && temperature < 20) {
  // Range: 0-20
  console.log("It's cool outside.");
  console.log("Let's go to the park.");
} else if (temperature >= 20 && temperature <= 29) {
  console.log("It's warm outside.");
  console.log("Let's get some ice cream.");
} else {
  console.log("It's hot outside.");
}

/**
 * two types of error
 *
 * 1. logical error
 *
 * 2. syntax error
 */

/**
 * variablename++
 * variablename--
 */

// Conditional: switch-case statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the weekdays.");
    break;
  default:
    console.log("It's just a normal day.");
}

////////////////////////////////////////////

// 2. Looping Statements
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");

// For Loop
// 1. Variable Initialization
// 2. Conditional Expression
// 3. Increment and Decrement
for (let i = 1; i <= 3; i++) {
  // i = 1, i <= 3 and i++ is called components
  console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}
