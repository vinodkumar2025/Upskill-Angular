import { Component, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() selectedUserName?:string
  @Input() selectedUserId?: string;
  addtask = false;

  constructor(private taskService:TaskService){
  }

  get getUserTasks(){
    return this.taskService.getTasks(this.selectedUserId!);
  }

  onAddTask(){
    this.addtask = true;
  }
  onCancel(){
    this.addtask = false;
  }
}
