import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { ReactiveLoginFormComponent } from "./auth/reactive-login-form/reactive-login-form.component";
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, ReactiveLoginFormComponent, SignupComponent],
})
export class AppComponent {}
