import { createAction, props } from "@ngrx/store";

export const increment = createAction('[counter] Increment');
export const decrement = createAction('[counter] Decrement');
export const reset = createAction('[counter] Reset');
export const addCounter = createAction('[counter] Add Counter',props<{ value: number }>());
export const removeCounter = createAction('[counter] Remove Counter',props<{ value: number }>());