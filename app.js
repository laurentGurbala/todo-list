import { TodoList } from "./components/TodoList.js";
import { loadTasks, saveTasks } from "./components/storage.js";
import { createTodoElement } from "./functions/dom.js";

// Variables
const todoList = new TodoList();
const form = document.querySelector("form")
const input = document.querySelector(".form-control")
const ul = document.querySelector("ul.list-group")
const filterButtons = document.querySelectorAll("[data-filter]")

// Events
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (title) {
        const item = todoList.addItem(title)
        createTodoElement(item, ul, todoList)
        input.value = ""
        saveTasks(todoList)
    }
});

filterButtons.forEach(button => button.addEventListener("click", () => filterTasks(button.dataset.filter)))

// Functions
function filterTasks(filter) {
    let items;
    switch (filter) {
        case "all": 
            items = todoList.getAllItems()
            break;
        case "todo":
            items = todoList.getActiveItems()
            break;
        case "done":
            items = todoList.getCompletedItems()
            break;
        default:
            return;
    }

    updateDisplay(items)
}

function updateDisplay(items) {
    ul.innerHTML = ""
    items.forEach(item => createTodoElement(item, ul, todoList))
}

// App
loadTasks(todoList, (item) => createTodoElement(item, ul, todoList))