import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() ticket!: { id: string; title: string; request: string; status: 'open' | 'closed' };
}
