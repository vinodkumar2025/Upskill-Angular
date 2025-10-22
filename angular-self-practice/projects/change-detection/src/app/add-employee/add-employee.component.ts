import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input [(ngModel)]="newName" placeholder="Enter employee name" />
    <button (click)="onAdd()">Add Employee</button>
  `,
})
export class AddEmployeeComponent {
  @Output() add = new EventEmitter<string>();
  newName = '';

  onAdd() {
    if (this.newName.trim()) {
      this.add.emit(this.newName);
      this.newName = '';
    }
  }
}
