import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { empReducer } from './store/emp/emp.reducer';
import { counterReducer } from './store/counter/counter.reducer';
import { provideHttpClient } from '@angular/common/http';
import { todoReducer } from './store/crud/crud.reducer';
import { CrudEffects } from './store/crud/crud.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
  provideRouter(routes),
  provideStore({emp: empReducer, counter: counterReducer, todos: todoReducer}),
  provideEffects([CrudEffects]),
  provideStoreDevtools({
    maxAge: false, // Retains last 25 states 
    logOnly: false, // Restrict extension to log-only mode
  })],
};
