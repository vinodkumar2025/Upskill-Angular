import { Component } from '@angular/core';
import { TestData } from '../test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private testData: TestData){

  }
  onClick(){
    this.testData.clickCount = this.testData.clickCount+1
  }
}
