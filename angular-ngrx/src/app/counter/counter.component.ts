import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter/counter.action';
import { Icounter } from '../store/counter/counter.store';
import { AsyncPipe } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe, AdminComponent, UserComponent, CustomCounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  title = 'angular-ngrx';
  counter$: Observable<number>;

  constructor(private store: Store<Icounter>) {
    this.counter$ = this.store.select('counter');
  }
  onIncrement() {
    // this.counter++;
    this.store.dispatch(increment());
  }
  onDecrement() {
    // this.counter--;
    this.store.dispatch(decrement());
  } 
  onReset() {
    // this.counter = 0;
    this.store.dispatch(reset());
  }
}
