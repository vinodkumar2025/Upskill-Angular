import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation1',
  standalone: true,
  imports: [],
  templateUrl: './view-encapsulation1.component.html',
  styleUrl: './view-encapsulation1.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulation1Component {

}
