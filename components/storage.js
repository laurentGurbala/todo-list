import { TodoItem } from "./TodoItem.js";

/**
 * Sauvegarde la liste des tâches dans localStorage.
 * @param {TodoList} todoList - La liste des tâches à sauvegarder.
 */
export function saveTasks(todoList) {
    const tasksData = todoList.items.map(item => ({
        id: item.id,
        title: item.title,
        completed: item.completed
    }))
    localStorage.setItem("tasks", JSON.stringify(tasksData))
    
}

/**
 * Charge les tâches depuis localStorage et les ajoutes àla TodoList fournie.
 * @param {TodoList} todoList - La liste de tâches à laquelle les tâches chargées seront ajoutées.
 * @param {Function} callback - La méthode pour créer les items chargés du localStorage.
 */
export function loadTasks(todoList, callback) {
    const tasksData = JSON.parse(localStorage.getItem("tasks") || "[]")
    let maxId = 0;

    tasksData.forEach(task => {
        const item = new TodoItem(task.id, task.title, task.completed)
        todoList.items.push(item)
        if (task.id > maxId) {
            maxId = task.id
        }

        callback(item)
    });
    
    todoList.nextId = maxId + 1
}