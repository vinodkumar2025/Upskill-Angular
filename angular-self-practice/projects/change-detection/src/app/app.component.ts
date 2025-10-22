import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddEmployeeComponent, EmployeeListComponent],
  template: `
    <h1>👩‍💻 Employee Dashboard</h1>

    <app-add-employee (add)="addEmployee($event)"></app-add-employee>

    <button (click)="refreshData()">🔁 Refresh Data (simulate API)</button>

    <app-employee-list [employees]="employees"></app-employee-list>
  `,
})
export class AppComponent {
  employees = [
    { id: 1, name: 'Vinod' },
    { id: 2, name: 'Kumar' },
  ];

  addEmployee(name: string) {
    // immutable update
    this.employees = [...this.employees, { id: Date.now(), name }];
  }

  refreshData() {
    // same data but new array reference
    this.employees = [...this.employees];
  }
}
