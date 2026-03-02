import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deleteTodo, deleteTodoSuccess, loadTodos, loadTodosSuccess } from "./crud.actions";
import { CrudService } from "../../crud/crud.service";
import { inject, Injectable } from "@angular/core";
import { ITodo } from "./crud.store";
import { map, switchMap } from "rxjs/operators";

@Injectable()
export class CrudEffects {
    actions$ = inject(Actions);
    constructor(private crudService: CrudService) {}

    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(loadTodos),
        // Call the service method and return the result
        switchMap(() => this.crudService.getTodos().pipe(
            map((todos: ITodo[]) => loadTodosSuccess({ todos })),
        ))
    ));

    deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(deleteTodo),
        switchMap(({ id }) => this.crudService.deleteTodo(id).pipe(
            map(() => deleteTodoSuccess({ id }))
        ))
    ));
}