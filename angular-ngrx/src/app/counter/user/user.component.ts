import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Icounter } from '../../store/counter/counter.store';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
 counter$: Observable<number>;
  
    constructor(private store: Store<Icounter>) {
      this.counter$ = this.store.select('counter');
    }
}
