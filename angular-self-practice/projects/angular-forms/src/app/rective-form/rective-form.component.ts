import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rective-form.component.html',
  styleUrl: './rective-form.component.css'
})
export class RectiveFormComponent{
  student: student = {
    id:0,
    name:'vinod',
    branch:'civil',
    marks:99
  }
  studentForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.studentForm = this.fb.group({
      id: new FormControl(this.student.id),
    name: [this.student.name,[Validators.required,this.noSpaceValidator,Validators.pattern('^[a-zA-Z]+$')]],
    branch: [this.student.branch],
    marks: [this.student.marks]
    })
  }

  formsubmit(){
    console.log(this.studentForm)
  }

  noSpaceValidator(control:AbstractControl){
    if(control.value && control.value.includes(' ')){
      return {noSpace:true}
    } else {
      return null;
    }
  }
}

export interface student{
  id:number,
  name:string,
  branch:string,
  marks:number
}
