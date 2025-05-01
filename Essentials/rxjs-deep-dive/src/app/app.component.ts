import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs';
import { Test1Component } from './test1/test1.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[Test1Component,TestComponent]
})
export class AppComponent implements OnInit {
  private destroy = inject(DestroyRef)
  clickCount = signal(0)

  constructor(){
    effect(()=>{
      console.log(`button clicked ${this.clickCount()} times`)
    })
  }
  ngOnInit(): void {
    const intervalObservable$ = interval(1000).pipe(
      map((val)=>val*2)
    ).subscribe(
       (val)=> console.log(val)
    )

    this.destroy.onDestroy(()=> intervalObservable$.unsubscribe())
  }

  onClick(){
    this.clickCount.update((val)=>val+1)
  }
}
