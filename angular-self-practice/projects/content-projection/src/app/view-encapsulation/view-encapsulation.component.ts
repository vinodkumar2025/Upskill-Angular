import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  imports: [],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent {

}
