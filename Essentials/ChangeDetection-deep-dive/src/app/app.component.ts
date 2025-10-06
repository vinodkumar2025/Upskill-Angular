import { Component, OnInit } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CounterComponent, MessagesComponent,HttpClientModule ],
})
export class AppComponent implements OnInit {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (val)=>console.log(val),
      error:(err)=>console.log(err),
      complete: ()=>console.log('successfully completed')
    })
  }
}
