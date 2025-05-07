import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formData:{username:string,password:string,gender:string}={username:'vinod',password:'23232',gender:'male'}
  
  onFormSubmit(form:NgForm){
    
    console.log(form)
    console.log('📦 [Form Value]:', form.value)
    if (form.invalid) { 
      // Mark all controls as touched so validation messages show
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }
  
    form.reset()
  }
}
