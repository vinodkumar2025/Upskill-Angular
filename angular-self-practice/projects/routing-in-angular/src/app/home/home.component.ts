import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //  test:number =1;
  constructor(private router: Router) { }

  onbuttonClick() {
    this.router.navigate(['hero',1],{queryParams:{id:2}})
  }
}
