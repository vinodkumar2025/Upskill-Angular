import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeItemComponent } from '../employee-item/employee-item.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeItemComponent],
  template: `
    <h3>Employee List</h3>
    <app-employee-item
      *ngFor="let emp of employees"
      [employee]="emp">
    </app-employee-item>
  `,
  // toggle between Default and OnPush to experiment
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  @Input() employees!: { id: number; name: string }[];
}
