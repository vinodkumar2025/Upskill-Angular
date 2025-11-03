import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError((value: HttpErrorResponse) =>{
            if(value.status === 401){
                  console.error('Unauthorized - maybe token expired');
            }
            return throwError(()=>Error)
        })
    )
  }
}
