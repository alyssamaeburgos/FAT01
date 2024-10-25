// Javascript is a programming language.
// Programming language gives specific instructions to the computer to follow.

// STATEMENT
console.log("Hello World!");

// This is a single-line comment. Human use only. Computer will not read.

/*
    This is a multi-line comment.
*/

// VARIABLES = container
/*
    let -> mutable/changeable variable - block-scope level
    var -> mutable/changeable variable - global-scope level
    const -> unmutable/changeable variable - block-scope lever
 */
/** SYNTAX
 * keyword variable_name
 * eg. let firstName
 */
/** NAMING CONVENTION
 * Camel Case naming convention - first word small first letter, second word capital first letter
 */
let firstName = "John";
console.log("Hello", firstName);
firstName = "Miko";
console.log("Hello", firstName);

var lastName = "Smith";
console.log("Lastname:", lastName);
lastName = "David";
console.log("Lastname:", lastName);

const birthday = "02-24-2000";
console.log("birthday", birthday);
// birthday = "03-12-2001"; This will show TypeError.

/**
 * BLOCKS
 * - to group a multiple related statements
 */

if (true) {
  var email = "mikodavid@example.com"; // var is global-scope level
  let userName = "mikodavid20"; // let is block-scope level
}
console.log("Email:", email);
// console.log("Username:", userName); This will return a reference error because username has a let keyword.


