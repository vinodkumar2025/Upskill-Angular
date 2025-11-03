import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptorService } from '../../../interceptor-module/src/core/auth-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    // ✅ Enable HttpClient + DI-based interceptors
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Register your interceptors
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
]
};
