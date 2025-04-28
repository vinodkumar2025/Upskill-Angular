import { Component, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../../shared/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online'|'offline'|'unknown' = 'offline';
  title = 'Server Status';
  image = {src:'status.png',alt: 'A signal symbol'}
  constructor(){
    
  }

  ngOnInit(): void {
    setInterval(() => {
      const mat = Math.random();
      if (mat < 0.5) {
        this.currentStatus = 'offline';
      } else if(mat < 0.8) {
        this.currentStatus = 'online';
      }else{
        this.currentStatus = 'unknown';
      }
      
    }, 2000);
  }
}
