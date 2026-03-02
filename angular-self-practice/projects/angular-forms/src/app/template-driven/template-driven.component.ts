import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  name:string='';
  password: string="";
  selectedBranch:string='';
  onSubmitButtonClick(form:NgForm){
    form.form.markAllAsTouched();
    if(form.valid){
    alert(JSON.stringify(form.value))
    }
  }
}
