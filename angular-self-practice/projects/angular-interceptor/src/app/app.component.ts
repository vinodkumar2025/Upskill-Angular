import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-interceptor';
  constructor(private http: HttpClient ){
    this.http.get('https://github.com/vinodkumar2025').subscribe({
      next: res => console.log('Response:', res),
      error: err => console.log('Error:', err)
    });
  }
}
