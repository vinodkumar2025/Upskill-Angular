import { Routes } from '@angular/router';
import { RectiveFormComponent } from './rective-form/rective-form.component';

export const routes: Routes = [
    {path:'reactive', component:RectiveFormComponent},
    {path:'template', loadComponent:()=>import('./template-driven/template-driven.component').then(m=>m.TemplateDrivenComponent)},
];
