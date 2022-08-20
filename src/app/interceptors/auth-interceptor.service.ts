import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpParams,
    HttpEvent
} from '@angular/common/http';
import { take, exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../ngrx-store/app.reducer'
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
        private store: Store<fromApp.AppState>,
        private AuthService : AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth').pipe(
            take(1),
            map(authState => {
                return authState.user
            }),
            exhaustMap(user => {
                if ( user === null) {
                    return next.handle(req)
                }
                const modifiedReq = req.clone({
                    // params: new HttpParams().set('auth', user.token)
                    setHeaders: {
                        Authorization: 'Bearer ' + user.token
                    }
                });

                return next.handle(modifiedReq)
            })
        )
    }
}






















