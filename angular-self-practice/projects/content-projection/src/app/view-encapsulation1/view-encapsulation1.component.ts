import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FullNameComponent } from './full-name/full-name.component';

@Component({
  selector: 'app-view-encapsulation1',
  standalone: true,
  imports: [FullNameComponent],
  templateUrl: './view-encapsulation1.component.html',
  styleUrl: './view-encapsulation1.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ViewEncapsulation1Component {
  name: string = 'vinod';
  Fname:string = 'Vinod kumar';
  changename() {
    this.name = 'Kumar'
  }
}
