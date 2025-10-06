import { Component, ViewEncapsulation } from '@angular/core';
import { ViewEncapsulationDirective } from '../view-encapsulation.directive';
import { RestrictNumberDirective } from './restrictTonumber';
import { DynamicTooltip } from './DynamicTooltip.directive';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  imports: [ViewEncapsulationDirective, RestrictNumberDirective, DynamicTooltip],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent {

}
