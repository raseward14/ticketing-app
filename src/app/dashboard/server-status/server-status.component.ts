import { Component, OnInit, AfterViewInit, OnDestroy, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  // private interval?: ReturnType<typeof setInterval>; 
  private destroyRef = inject(DestroyRef);

  constructor() {}
  
  ngOnInit() {
    console.log('ON INIT');
    // Initial status check can be placed here if needed
    setInterval(() => {
      const rndm = Math.random(); // 0 - 1
  
      if (rndm < 0.5) {
        this.currentStatus = 'online';
      } else if (rndm < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      };
    }, 5000)
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  //   console.log('ON DESTROY');
  // }
}
