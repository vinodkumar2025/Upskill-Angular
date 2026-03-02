import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodos } from '../store/crud/crud.select';
import { deleteTodo, loadTodos } from '../store/crud/crud.actions';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
 private store = inject(Store);
 todos$ = this.store.select(selectTodos);

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  onDeleteClick(id: number) {
    // Dispatch the deleteTodo action with the id of the todo to be deleted
    this.store.dispatch(deleteTodo({ id }));
  }

  onUpdateClick(id: number) {
    // Handle update logic here (e.g., navigate to an update form)
    prompt('enter new title');
  }
}
