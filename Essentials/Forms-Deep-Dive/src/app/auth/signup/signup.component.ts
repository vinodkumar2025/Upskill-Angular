import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {
  signUpForm = new FormGroup({
    email: new FormControl('',[Validators.email]),
    pas: new FormGroup({
      password: new FormControl('',[Validators.required]),
      confirmpassword: new FormControl('',[Validators.required]),
    }),
    name: new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl('')
    }),


  })

}
