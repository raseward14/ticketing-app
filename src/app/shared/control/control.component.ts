import { 
  Component, 
  HostBinding, 
  HostListener, 
  input, 
  ViewEncapsulation, 
  inject,
  ElementRef,
  ContentChild,
  contentChild ,
  AfterContentInit,
  OnInit,
  afterRender,
  afterNextRender  
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit, OnInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender:');
    });

    afterNextRender(() => {
      console.log('afterNextRender:');
    });
  }

  ngOnInit() {
    console.log('OnInit:', this.control);
  }  

  ngAfterContentInit() {
    console.log('AfterContentInit:', this.control);
  }

  onClick() {
    console.log('clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
