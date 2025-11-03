import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Suppose we have a token stored in localStorage
    const token = 'vinod';

    // Clone the request and add the token to headers if available
    let clonedReq = req;
    if (token) {
      clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pass the modified request to the next handler
    return next.handle(clonedReq);
  }
}
