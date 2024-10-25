// DOM Manipulation
// 1. Access/target the element

// todo-input
// todo-button
// filter-todo
// todo-list

// Step 1: Select DOM Element
// Accept: #id, .class-name, tag
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Add event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

function addTodo(e) {
  // e is getting the event.
  // Prevent form submission
  e.preventDefault();

  // create a div container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create the new todo
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value; //   to get the data input in the form
  todoDiv.appendChild(newTodo);

  // create the complete button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class = "fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);

  //   create the delete button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class = "fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  //   Append the todoDiv to the todoList
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteOrCompleteTodo(e) {
  // e is getting the event.
  const target = e.target;

  console.log(target);
  console.log(target.classList.contains("complete-btn"));

  if (target.classList.contains("complete-btn")) {
    console.log("The user wants to mark the task as completed.");

    const todoDiv = target.parentElement;
    // todoDiv.classList.add("completed");
    todoDiv.classList.toggle("completed"); // toggle: after clicking the complete icon, class name will change to "todo completed", can unclick to return to the uncheck class name which is "todo".
  }

  if (target.classList.contains("trash-btn")) {
    console.log("The user wants to delete the task.");
    console.log(target.parentElement);

    const todoDiv = target.parentElement;
    todoDiv.classList.add("fall");

    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }

  //   const todoInput = document.querySelector(".todo-item");
  //   console.log(todoInput);
  //   todoInput.parentNode.remove();
}

function filterTodos(e) {
  // e is getting the event.
  // get the child
  const toDos = todoList.childNodes;
  toDos.forEach(function (todo) {
    console.log(toDos);
    const targetValue = e.target.value; // getting the value of the event
    console.log(targetValue);
    switch (targetValue) {
      case "all":
        todo.style.display = "flex";
        console.log("The user wants to display all of it.");
        break;

      case "completed":
        console.log("The user wants to display all completed task.");
        console.log(todo.classList.contains("completed"));
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none"; // none means invisible, will not show
        }
        break;

      case "uncompleted":
        console.log("The user wants to display all uncompleted task.");
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none"; // none means invisible, will not show
        }
        break;
    }
  });
}
