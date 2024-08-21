import { TodoItem } from "./TodoItem.js"

export class TodoList {
    constructor() {
        this.items = []
        this.nextId = 1
    }

    addItem(title) {
        const item = new TodoItem(this.nextId++, title)
        this.items.push(item)
        return item
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id)
    }

    getAllItems() {
        return this.items
    }

    getCompletedItems() {
        return this.items.filter(item => item.completed)
    }

    getActiveItems() {
        return this.items.filter(item => !item.completed)
    }
}