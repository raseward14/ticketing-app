import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() requestText!: string; 
  @Input() status!: 'open' | 'closed';
}
