import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation1Component } from './view-encapsulation1/view-encapsulation1.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CommonModule, ViewEncapsulationComponent, ViewEncapsulation1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'content-projection';
}
