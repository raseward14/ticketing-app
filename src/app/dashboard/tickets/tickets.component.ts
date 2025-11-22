import { Component } from '@angular/core';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';

import type { Ticket } from './tickets.types';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
    tickets: Ticket[] = [];

    onAddTicket(ticketData: { title: string, requestText: string }) {
      const ticket: Ticket = { 
        id: Math.random().toString(36).substring(2, 9), 
        title: ticketData.title, 
        requestText: ticketData.requestText, 
        status: 'open' };

      this.tickets.push(ticket);
    }

    onCloseTicket(id: string) {
      this.tickets = this.tickets.map((ticket) => {
        if (ticket.id === id) {
          return { ...ticket, status: 'closed' }; 
        } else {
          return ticket;
        }
      }) 
    }
}
