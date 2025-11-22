import { Component, Input, input, signal, Output, EventEmitter } from '@angular/core';

import type { Ticket } from '../tickets.types';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  @Output() close = new EventEmitter<string>();

  closeTicket(): void {
    this.close.emit(this.data().id);
  }

  onToggleDetails(): void {
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
