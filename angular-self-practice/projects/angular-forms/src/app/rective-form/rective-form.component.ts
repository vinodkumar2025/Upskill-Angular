import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
      id: [this.student.id],
    name: [this.student.name],
    branch: [this.student.branch],
    marks: [this.student.marks]
    })
  }

  formsubmit(){
    console.log(this.studentForm)
  }
}

export interface student{
  id:number,
  name:string,
  branch:string,
  marks:number
}
