import { Component, Input, input, signal, Output, EventEmitter, output } from '@angular/core';

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

  close = output();
  //@Output() close = new EventEmitter<string>();

  onMarkAsCompleted() {
    this.close.emit();
  }

  onToggleDetails(): void {
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
