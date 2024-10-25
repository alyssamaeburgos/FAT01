let fruits = ["Apple", "Banana", "Strawberry", "Melon", "Durioan", "Mango"];

console.log("Fruits:", fruits);

console.log("Length of fruits:", fruits.length);

console.log("Third fruit:", fruits[2]);

console.log("Last fruit:", fruits[fruits.length - 1]);

// Update an element
fruits[0] = "Avocado";

// Add an element
// .push() --> Add an element at the end
fruits.push("Pear");
console.log("Fruits:", fruits);

// Delete an element
// .pop(): delete an element at the end
fruits.pop();
console.log("Fruits:", fruits);

// .splice() --> add or delete an element at a specified index
// 1. starting index
// 2. delete count
// 3. element(s) you want to add
fruits.splice(
  2,
  4,
  "Grapes",
  "Orange",
  "Watermelon",
  "Lemon",
  "Dragon Fruit",
  "Jackfruit"
);
console.log("Fruits:", fruits);

// Searching Element
// .include(element) --> Check if an element exist
console.log("Is Banana included>", fruits.includes("Banana"));

// .indexOf(element): return the index of the element or -1
console.log("Index of Grapes:", fruits.indexOf("Grapes"));

// .forEach() --> iterate over an array, execute a function for each element
fruits.forEach(function (fruit) {
  console.log("Fruit:", fruit);
});
