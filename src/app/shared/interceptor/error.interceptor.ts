import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ng-bootstrap-ext';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toaster: ToastService,
    private router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError(err => {
      
      const error = err.error.message ? err.error.message : err.statusText;
      if (err.status === 401) {
        localStorage.clear();
        this.toaster.error('Timout', 'Session Expired');
      } else {
        this.toaster.error(error, 'Error');
      }
      return throwError(error)
    }))
  }
}
