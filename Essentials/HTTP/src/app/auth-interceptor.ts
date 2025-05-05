import { HttpInterceptorFn } from '@angular/common/http';

        export const authInterceptor: HttpInterceptorFn = (req, next) => {
        const token = 'vinodtoken';
        
        // Clone the request and add the Authorization header if token exists
        const authReq = token
            ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
            : req;

        return next(authReq);
        };
