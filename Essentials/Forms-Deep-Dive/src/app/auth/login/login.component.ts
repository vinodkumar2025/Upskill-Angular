import { CommonModule } from '@angular/common';
import { afterNextRender, AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule,CommonModule]
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('form') form!:NgForm;

  constructor(){
    afterNextRender(()=>{
      this.form.valueChanges?.pipe(debounceTime(500)).subscribe((value)=>{
        window.localStorage.setItem('email', JSON.stringify({email: value.email}))
      })
    })
  }
  onSubmit(formData: NgForm){
    if(formData.form.valid){
      alert(`entered email ${formData.form.value.email}`)
      formData.form.reset()
    }else{
      formData.form.markAllAsTouched()
    }
  }

  ngAfterViewInit(): void {
    const savedEmail = localStorage.getItem('email');
    if(savedEmail){
      const semail = JSON.parse(savedEmail);
      setTimeout(() => {
        if (this.form.controls['email']) {
          this.form.controls['email'].setValue(semail.email);
        }
      });
    }
  }
}
