// Task Interface
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Task List Class
class TaskList {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  // adding new task
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // completing task
  completeTask(id: number): void {
    const task = this.tasks.find((item) => item.id === id);
    console.log(task);
    if (task) {
      task.completed = true;
      console.log(`Task ${task.title} marked as completed`);
    } else {
      console.log(`your provided task id ${id} is not correct`);
    }
  }

  // listing task
  listTask(): void {
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
