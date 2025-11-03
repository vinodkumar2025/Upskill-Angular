import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptor-module';
  constructor(private http: HttpClient){
    this.http.get('https://github.com/sadanandpai/').subscribe(console.log);
  }
}
