import { Component } from '@angular/core';
import { DashboardItemComponent } from "../../shared/dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketData } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  title = 'Support Tickets';
  image = {src:'list.png',alt: 'A list of items'}
  tickets: TicketData[] = []

  addTicket(ticket: { id: string; title: string; request: string; status: 'open' | 'closed'; }) {
    this.tickets.push(ticket);
  }
}
