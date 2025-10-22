import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}
  
  ngonInit() {
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
}
