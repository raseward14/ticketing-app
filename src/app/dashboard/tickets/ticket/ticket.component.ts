import { Component, Input, input } from '@angular/core';

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
}
