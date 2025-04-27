import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) selectedUserId!:string;
  @Output() cancel = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  taskService = inject(TaskService);
  onCancel(){
    this.cancel.emit(false)
  }

  onCreateTask(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,} as NewTaskData, this.selectedUserId)
      this.cancel.emit(false);
  }
}