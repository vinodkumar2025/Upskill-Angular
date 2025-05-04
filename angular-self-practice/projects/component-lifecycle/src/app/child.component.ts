import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  template: `
    <div>
      <p>Child Component: Received data = {{ data }}</p>
      <ng-content></ng-content> <!-- Content projection in child -->
    </div>
  `
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input() data!: string;

  constructor() {
    console.log('ChildComponent: constructor');
    // 1. constructor() 
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent: ngOnChanges', changes);
    // 2. ngOnChanges(changes: SimpleChanges)
  }

  ngOnInit() {
    console.log('ChildComponent: ngOnInit');
    // 3. ngOnInit()
  }

  ngDoCheck() {
    console.log('ChildComponent: ngDoCheck');
    // 4. ngDoCheck()
  }

  ngAfterContentInit() {
    console.log('ChildComponent: ngAfterContentInit');
    // 5. ngAfterContentInit()
    // Runs after the content has been projected into the child.
  }

  ngAfterContentChecked() {
    console.log('ChildComponent: ngAfterContentChecked');
    // 6. ngAfterContentChecked()
    // Runs after every check of projected content.
  }

  ngAfterViewInit() {
    console.log('ChildComponent: ngAfterViewInit');
    // 7. ngAfterViewInit()
  }

  ngAfterViewChecked() {
    console.log('ChildComponent: ngAfterViewChecked');
    // 8. ngAfterViewChecked()
  }

  ngOnDestroy() {
    console.log('ChildComponent: ngOnDestroy');
    // 9. ngOnDestroy()
  }
}
