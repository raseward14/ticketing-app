import { Component, OnInit, AfterViewInit, OnDestroy, DestroyRef, inject, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

export class ServerStatusComponent implements OnInit, AfterViewInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() =>  {
      console.log(`Server status changed to: ${this.currentStatus()}`);
    })
  }
  
  ngOnInit() {
    // Initial status check can be placed here if needed
    const interval = setInterval(() => {
      const rndm = Math.random(); // 0 - 1
  
      if (rndm < 0.5) {
        this.currentStatus.set('online');
      } else if (rndm < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      };
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
      console.log('Component destroyed, interval cleared');
    });
  }

  ngAfterViewInit() {
    // console.log('AFTER VIEW INIT');
  }
}
