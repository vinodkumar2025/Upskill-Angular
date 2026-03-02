import { createAction, props } from "@ngrx/store";
import { ITodo } from "./crud.store";

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: ITodo[] }>());


export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction('[Todo] Delete Todo Success', props<{ id: number }>());