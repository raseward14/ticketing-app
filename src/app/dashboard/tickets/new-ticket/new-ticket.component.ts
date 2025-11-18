import { 
  Component, 
  ViewChild, 
  ElementRef, 
  viewChild, 
  AfterViewInit, 
  OnInit,
  Output,
  EventEmitter,
  output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from '../../../shared/control/control.component';

import type { Ticket } from '../tickets.types'

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() addTicket = new EventEmitter<Ticket>();
  addTicket = output<{ title: string, requestText: string }>();

  ngOnInit(): void {
    // console.log('OnInit', this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    // console.log('AfterViewInit', this.form?.nativeElement);
  }

  onSubmit(title: string, requestText: string) {
    this.addTicket?.emit({ title: title, requestText: requestText });    

    this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
  }
}
