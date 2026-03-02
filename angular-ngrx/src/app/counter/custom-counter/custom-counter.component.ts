import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Icounter } from '../../store/counter/counter.store';
import { addCounter, removeCounter } from '../../store/counter/counter.action';

@Component({
  selector: 'app-custom-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss'
})
export class CustomCounterComponent {
  addcounter: number = 0;
  removecounter: number = 0;
  constructor(private store:Store<Icounter>) { }
  onAddClick(){
    this.store.dispatch(addCounter({value: this.addcounter}));
  }
  onRemoveClick(){
    this.store.dispatch(removeCounter({value: this.removecounter}));
  }
}
