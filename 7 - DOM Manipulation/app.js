// Document Object Model (DOM)

// document is js's html partner | 1st step target the element
let elementWithID = document.getElementById("first-div");
console.log("Element with ID:", elementWithID);

// to change the value of an element | 2nd step change the element
elementWithID.textContent = "Div 1";

//////////////////////////////////////////////////////////////////

let elementWithClass = document.getElementsByClassName("sample-div");
console.log("Element with Class:", elementWithClass);
elementWithClass[1].textContent = "Div 2";

let listItems = document.getElementsByTagName("li");
console.log("Elements with Tags:", listItems);

////////////////////////////////////////////////////////////////

// Change the Style

console.log(listItems[3]);
listItems[3].style.backgroundColor = "Aqua";
listItems[3].style.color = "tomato";

/////////////////////////////////////////////////////////////

// ES6 - New Version of JS

// accept ID, class-name, tag
// return only the first element || you can use query selector if you only want one element
let orderedListItem = document.querySelector(".ordered-list");
console.log("Query Selector:", orderedListItem);
let unorderedListItem = document.querySelector(".ordered-list");
console.log("Query Selector:", orderedListItem);
unorderedListItem.style.backgroundColor = "aqua";
unorderedListItem.style.color = "tomato";

// accept ID, class-name, tag
// return all elements
let headings = document.querySelectorAll("h3");
console.log("Query Selector All:", headings);
headings.forEach(function (heading) {
  heading.style.backgroundColor = "tomato";
  heading.style.color = "white";
});

// change the image src
let imgSrc = document.querySelector("#day-night-icon");
console.log("Image details:", imgSrc);
imgSrc.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// create a div inside the parent element
let parentElement = document.querySelector("#parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// delete an element
let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();

// Adding event listeners and manipulating element styles
// let darkModeBtn = document.querySelector("#dark-mode-btn");
// let lightMode = true;
// darkModeBtn.addEventListener("click", function () {
//   let pageContainer = document.getElementById("page-container");
//   pageContainer.style.backgroundColor = "black";
//   pageContainer.style.color = "white";

//   let pageModeText = document.getElementById("page-mode-text");
//   pageModeText.textContent = "Dark Mode";

//   if ((darkModeBtn.textContent = "Dark Mode")) {
//     pageContainer.style.backgroundColor = "black";
//     pageContainer.style.color = "white";

//     let pageModeText = document.getElementById("page-mode-text");
//     pageModeText.textContent = "Dark Mode";
//     darkModeBtn.textContent = "Light Mode";
//   } else if ((darkModeBtn.textContent = "Light Mode")) {
//     pageContainer.style.backgroundColor = "white";
//     pageContainer.style.color = "black";

//     let pageModeText = document.getElementById("page-mode-text");
//     pageModeText.textContent = "Light Mode";
//   }
// });
////////////////////////////////////////////////////////////////////////
// let darkModeBtn = document.querySelector("#dark-mode-btn");
// // let lightMode = true;
// darkModeBtn.addEventListener("click", function () {
//   let pageContainer = document.getElementById("page-container");
//   let pageModeText = document.getElementById("page-mode-text");
//   if ((darkModeBtn.textContent = "Dark Mode")) {
//     pageContainer.style.backgroundColor = "Black";
//     pageContainer.style.color = "white";
//     pageModeText.textContent = "Dark Mode";
//     darkModeBtn.textContent = "Light Mode";
//   } else if ((darkModeBtn.textContent = "Light Mode")) {
//     pageContainer.style.backgroundColor = "white";
//     pageContainer.style.color = "black";
//   }
// });

let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  let pageContainer = document.getElementById("page-container");
  let pageModeText = document.getElementById("page-mode-text");

  if (darkModeBtn.textContent === "Dark Mode") {
    pageContainer.style.backgroundColor = "Black";
    pageContainer.style.color = "white";
    pageModeText.textContent = "Dark Mode";
    darkModeBtn.textContent = "Light Mode";
  } else {
    pageContainer.style.backgroundColor = "white";
    pageContainer.style.color = "black";
    pageModeText.textContent = "Light Mode";
    darkModeBtn.textContent = "Dark Mode";
  }
});
