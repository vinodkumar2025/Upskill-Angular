import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CrudState } from "./crud.reducer";

export const selectTodoState = createFeatureSelector<CrudState>('todos');

export const selectTodos = createSelector(
    selectTodoState,
    (state) => state.todos
);

