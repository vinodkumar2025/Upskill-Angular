import { Component } from '@angular/core';
import { DashboardItemComponent } from "../../shared/dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  title = 'Support Tickets';
  image = {src:'list.png',alt: 'A list of items'}
}
