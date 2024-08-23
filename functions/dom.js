import { TodoItem } from "../components/TodoItem.js";
import { TodoList } from "../components/TodoList.js";
import { saveTasks } from "../components/storage.js";

/**
 * Crée et ajoute un élément de todo à l'élément parent dans le DOM.
 * @param {TodoItem} item - L'objet TodoItem à représenter dans le DOM.
 * @param {HTMLElement} parent - L'élément parent où l'élément de todo doit être ajouté.
 * @param {TodoList} todoList - La liste de todo pour gérer les événements.
 */
export function createTodoElement(item, parent, todoList) {
    const todoElement = createElement("li", { class: "todo list-group-item d-flex align-items-center"})
    todoElement.setAttribute("data_id", item.id)

    const checkbox = createElement("input", {
        type: "checkbox",
        class: "form-check-input",
    })
    checkbox.checked = item.completed

    const label = createElement("label", {
        class: "ms-2 form-check-label"
    })
    label.textContent = item.title
    if (item.completed) {
        label.classList.add("text-decoration-line-through");
    }


    const deleteBtn = createElement("button", {
        class: "ms-auto btn btn-danger btn-sm"
    })

    const icon = createElement("i", {
        class: "bi-trash"
    });
    deleteBtn.appendChild(icon)

    setupToDoItemEvents(todoElement, checkbox, label, deleteBtn, item, todoList)

    todoElement.appendChild(checkbox);
    todoElement.appendChild(label);
    todoElement.appendChild(deleteBtn);

    parent.appendChild(todoElement);
}

/**
 * Crée un élément HTML avec des attributs spécifiques.
 * @param {string} tagName - Le nom de la balise HTML à créer.
 * @param {object} attributes - Les attributs à ajouter à l'élément créé.
 * @returns {HTMLElement} - L'élément HTML créé.
 */
function createElement(tagName, attributes = {}) {
   const element = document.createElement(tagName);
   for (const [attribute, value] of Object.entries(attributes)) {
       if (value !== null) {
           element.setAttribute(attribute, value);
       }
   }

   return element;
}

/**
 * Configure les événements pour les éléments de la todo dans le DOM.
 * @param {HTMLElement} todoElement - L'élélement HTML représentant la todo.
 * @param {HTMLElement} checkbox - La checkbox pour marquer la todo comme complétée.
 * @param {HTMLElement} label - Le label contenant le texte de la todo.
 * @param {HTMLElement} deleteBtn - Le bouton pour supprimer la todo.
 * @param {TodoItem} item - L'objet TodoItem associé.
 * @param {TodoList} todoList - La liste de todo contenant l'item.
 */
function setupToDoItemEvents(todoElement, checkbox, label, deleteBtn, item, todoList) {
    checkbox.addEventListener("change", () => {
        item.toggleComplete()
        if (item.completed) {
            label.classList.add("text-decoration-line-through")
            todoElement.classList.add("completed");
        }else {
            label.classList.remove("text-decoration-line-through")
            todoElement.classList.remove("completed");
        }
        
        saveTasks(todoList)
    }) 

    deleteBtn.addEventListener("click", () => {
        todoList.removeItem(item.id)
        todoElement.remove()
        saveTasks(todoList)
    })
}