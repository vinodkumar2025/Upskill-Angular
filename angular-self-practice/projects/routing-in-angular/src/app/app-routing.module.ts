import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { HeroComponent } from './hero/hero.component';
import { AuthGuard } from './home/home.route.guard';

// const routes: Routes = [
//   { path: '', redirectTo:'home', pathMatch:'full'},
//   { path: 'home', component: HomeComponent, 
//     children:[
//       {path:'hero/:id', component: HeroComponent}
//     ]},
//   { path: '**', component: WildCardComponent },
// ];

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  // { path:'hero', loadComponent:()=>import('./hero/hero.component').then((c)=>c.HeroComponent)},
  { path:'hero/:id', component:HeroComponent},
  { path: '**', component: WildCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled',scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
