import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ErrorInterceptor } from './Error-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ]
})
export class CoreModule { }
