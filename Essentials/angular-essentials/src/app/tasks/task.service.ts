import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private tasks = dummyTasks;

  constructor() { 
    const tasks = localStorage.getItem('tasks')
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }
  getTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(newtaskDate: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      title: newtaskDate.title,
      summary: newtaskDate.summary,
      dueDate: newtaskDate.dueDate,
      userId: userId
    })
    this.saveTasks();
  }

  removeTask(taskId: string) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
