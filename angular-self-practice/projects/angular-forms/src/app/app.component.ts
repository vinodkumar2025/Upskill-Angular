import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string='';
  password: string="";
  onSubmitClick(form:NgForm){
    form.form.markAllAsTouched();
    console.log(form.controls);
    if(form.valid){
      console.log(form.value  )
    }
    // form.reset()

  }
}
