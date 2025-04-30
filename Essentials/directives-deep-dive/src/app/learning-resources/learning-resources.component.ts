import { Component } from '@angular/core';
import { ShafeLinkDirective } from '../shared/shafe-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [ShafeLinkDirective]
})
export class LearningResourcesComponent {}
