import { Component } from '@angular/core';
import { RemoveDomDirective } from './custom.directve';
import { HoverHighlightDirective } from './attribute.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RemoveDomDirective, HoverHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'create-directives';
}
