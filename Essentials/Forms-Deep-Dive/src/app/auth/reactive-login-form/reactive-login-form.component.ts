import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-login-form.component.html',
  styleUrl: './reactive-login-form.component.css'
})
export class ReactiveLoginFormComponent {
  form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[mustQustionMark])
  })
  onSubmit(){
    console.log(this.form)
  }
}
//custom validator
function mustQustionMark(control:AbstractControl){
  if(control.value.includes('?')){
    return null
  }
  return{questionMark: true}
}