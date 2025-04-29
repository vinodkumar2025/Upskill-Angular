import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() ticket!: { id: string; title: string; request: string; status: 'open' | 'closed' };
  @Output() completeTicket = new EventEmitter();
  visibleDetails = false;

  toggleDetails() {
    this.visibleDetails = !this.visibleDetails;
  }

  markAsComplete(){
    this.completeTicket.emit(this.ticket.id);
  }
}
