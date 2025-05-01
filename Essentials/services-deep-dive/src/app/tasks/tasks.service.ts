import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn:'root'
})
export class TasksService {
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly();

    addTask(taskData: { title: string, description: string }) {
        const newTask: Task = { ...taskData, id: Math.random().toString(), status: 'OPEN' }
        this.tasks.update((oldTasks) => [...oldTasks, newTask])
    }

    updateTaskStatus(taskId: string, changeStatus: TaskStatus) {
        this.tasks.update((oldtasks) => oldtasks.map((task) => {
            return task.id === taskId ? { ...task, status: changeStatus } : task
        }))
    }
}