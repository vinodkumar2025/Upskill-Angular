import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { ChildComponent } from "./child.component";

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
    <h2>App Component (Parent)</h2>
    <button (click)="changeData()">Change Data</button>
    <app-child [data]="parentData">
      <ng-content></ng-content> <!-- Content projection -->
    </app-child> <!-- Child Component -->
  `,
  imports: [ChildComponent]
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  parentData: string = 'Initial Value';

  constructor() {
    console.log('AppComponent: constructor');
    // 1. constructor() 
  }

  ngOnInit() {
    console.log('AppComponent: ngOnInit');
    // 2. ngOnInit()
  }

  ngDoCheck() {
    console.log('AppComponent: ngDoCheck');
    // 3. ngDoCheck()
  }

  ngAfterContentInit() {
    console.log('AppComponent: ngAfterContentInit');
    // 4. ngAfterContentInit()
    // Runs after content has been projected into the component.
  }

  ngAfterContentChecked() {
    console.log('AppComponent: ngAfterContentChecked');
    // 5. ngAfterContentChecked()
    // Runs after every check of projected content.
  }

  ngAfterViewInit() {
    console.log('AppComponent: ngAfterViewInit');
    // 6. ngAfterViewInit()
  }

  ngAfterViewChecked() {
    console.log('AppComponent: ngAfterViewChecked');
    // 7. ngAfterViewChecked()
  }

  ngOnDestroy() {
    console.log('AppComponent: ngOnDestroy');
    // 8. ngOnDestroy()
  }

  changeData() {
    this.parentData = 'Updated Value ' + Math.floor(Math.random() * 100);
  }
}
