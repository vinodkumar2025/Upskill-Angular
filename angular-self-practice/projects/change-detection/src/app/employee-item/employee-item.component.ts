import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border:1px solid #ccc; padding:5px; margin:5px">
      <strong>{{ employee.name }}</strong>
      <button (click)="changeName()">Change Name</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, // keep OnPush here
})
export class EmployeeItemComponent {
  @Input() employee!: { id: number; name: string };

  constructor(private cdr: ChangeDetectorRef) {}

  changeName() {
    this.employee.name += ' 👀';
    // this.cdr.markForCheck(); // uncomment to manually trigger UI update
  }
}
