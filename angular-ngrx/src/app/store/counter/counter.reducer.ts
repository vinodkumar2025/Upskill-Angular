import { createReducer, on } from "@ngrx/store";
import { addCounter, decrement, increment, removeCounter, reset } from "./counter.action";

export const intialState = 0;

export const counterReducer = createReducer(
    intialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, () => 0),
    on(addCounter, (state, action) => state + action.value),
    on(removeCounter, (state, action)=> state - action.value)
)