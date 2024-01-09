"use strict";
// Task List Class
class TaskList {
    constructor() {
        this.tasks = [];
    }
    // adding new task
    addTask(task) {
        this.tasks.push(task);
    }
    // completing task
    completeTask(id) {
        const task = this.tasks.find((item) => item.id === id);
        console.log(task);
        if (task) {
            task.completed = true;
            console.log(`Task ${task.title} marked as completed`);
        }
        else {
            console.log(`your provided task id ${id} is not correct`);
        }
    }
    // listing task
    listTask() {
        console.log("Tasks :");
        this.tasks.forEach((item) => {
            let tik = item.completed ? "OK" : "NO";
            console.log(`${tik} ${item.title}`);
        });
    }
}
// creating instance
const myTask = new TaskList();
// creating task
myTask.addTask({ id: 442, title: "My TypeScript Project", completed: false });
myTask.addTask({ id: 441, title: "My TypeScript Project", completed: false });
// updating task
myTask.completeTask(441);
// Displaying the list in Console tab
myTask.listTask();
