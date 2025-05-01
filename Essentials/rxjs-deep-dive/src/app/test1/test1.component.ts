import { Component, inject } from '@angular/core';
import { TestData } from '../test.service';

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {
  testdata = inject(TestData)

}
