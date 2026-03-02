import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'counter', pathMatch: 'full'},
    {path: 'counter', loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)},
    {path: 'crud', loadComponent: () => import('./crud/crud.component').then(m => m.CrudComponent)},
];
