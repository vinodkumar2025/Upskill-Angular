import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { TicketData } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') form!: ElementRef<HTMLFormElement>
  @Output()  ticketCreated = new EventEmitter<TicketData>();
  ticket?:TicketData;

  onSubmit(){
    const formData = new FormData(this.form.nativeElement);
    const ticket = {
      id: Math.random().toString(36).substring(2, 9),
      title: formData.get('title') as string,
      request: formData.get('request') as string,
      status: 'open' as 'open' | 'closed'
    }
    this.ticket = ticket;
    this.ticketCreated.emit(ticket);
    this.form.nativeElement.reset();
  }
}
