import { createReducer } from "@ngrx/store";
import { IPerson } from "./iperson";

export const initialState: ReadonlyArray<IPerson> = [
    { id: 1, name: 'Alice', age: 30, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 25, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' }
]
export const empReducer = createReducer(initialState)