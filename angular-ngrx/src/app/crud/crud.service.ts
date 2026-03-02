import { Injectable } from "@angular/core";
import { ITodo } from "../store/crud/crud.store";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    constructor(private http: HttpClient) {}

    getTodos(): Observable<ITodo[]> {
        return this.http.get<ITodo[]>('http://localhost:3000/Todos');
    }

    deleteTodo(id: number): Observable<void> {
        return this.http.delete<void>(`http://localhost:3000/Todos/${id}`);
    }
}