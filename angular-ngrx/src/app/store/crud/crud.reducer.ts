import { createReducer, on } from "@ngrx/store";
import { ITodo } from "./crud.store";
import { deleteTodoSuccess, loadTodos, loadTodosSuccess } from "./crud.actions";

export interface CrudState {
  todos: ITodo[];
}

export const initialCrudState: CrudState = {
  todos: []
};  

export const todoReducer = createReducer(
  initialCrudState,
  on(loadTodos, (state) => (state)),
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }))
);