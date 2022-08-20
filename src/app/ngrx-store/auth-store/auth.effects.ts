import { AuthResponseData } from './../../interfaces/auth-response';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions'
import { User } from 'src/app/models/user.model';
import { baseURL } from 'src/environments/environment';


const handleAuthentication = (
    id: number,
    name: string,
    email: string,
    token: string,
    cart: {
        id: number,
        items: []
    },
    wishlist: {
        id: number,
        items: []
    }

) => {
    const user = new User(id, name, email, token, wishlist, cart)
    localStorage.setItem('userData', JSON.stringify(user))
    return new AuthActions.AuthenticateSuccess({
        id: id,
        name: name,
        email: email,
        token: token,
        cart: cart,
        wishlist: wishlist,
        redirect: true
    })
}

const handleError = (errorRes: any) => {
    let errorMessage = 'An unknown error occurred!';
    let err
    if (!errorRes.error || !errorRes.error.message) {
        return of(new AuthActions.AuthenticateFail(errorMessage))
    }

    errorMessage = errorRes.error.message
    err = errorRes.error.errors
    console.log(err)

    return of(new AuthActions.AuthenticateFail(errorMessage))
}


@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.pipe(
        ofType(AuthActions.SIGNUP_START),
        switchMap((signupAction: AuthActions.SignupStart) => {
            return this.http
                .post<AuthResponseData>(
                    baseURL + 'user/register',
                    {
                        name: signupAction.payload.name,
                        email: signupAction.payload.email,
                        password: signupAction.payload.password,
                        password_confirmation: signupAction.payload.password_confirmation
                    }
                ).pipe(
                    tap(resData => {
                        console.log(resData)
                    }),
                    map(resData => {
                        return handleAuthentication(
                            resData.user.id,
                            resData.user.name,
                            resData.user.email,
                            resData.access_token,
                            resData.user.cart,
                            resData.user.wishlist
                        )
                    }), catchError(errorRes => {
                        return handleError(errorRes)
                    })
                )
        })
    )


    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http
                .post<AuthResponseData>(
                    baseURL + 'user/login',
                    {
                        email: authData.payload.email,
                        password: authData.payload.password
                    }
                ).pipe(
                    tap(resData => {

                    }),
                    map(resData => {
                        return handleAuthentication(
                            resData.user.id,
                            resData.user.name,
                            resData.user.email,
                            resData.access_token,
                            resData.user.cart,
                            resData.user.wishlist
                        )
                    }),
                    catchError(errorRes => {
                        return handleError(errorRes)
                    })
                )
        })
    )

    @Effect({ dispatch: false})
    authRedirect = this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap((authSuccessAction: AuthActions.AuthenticateSuccess) => {
            if(authSuccessAction.payload.redirect){
                this.router.navigate(['/home']);
            }
        })
    )

    @Effect()
    autoLogin = this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map(() => {
            const userData: {
                email: string,
                id: number,
                username: string,
                _token: string,
                _cart: {
                    id: number
                    items: []
                },
                _wishlist: {
                    id: number
                    items: []
                }
            } = JSON.parse(localStorage.getItem('userData')!)
            if (!userData) {
                return {
                    type: 'SOME DATA'
                }
            }
            const loadedUser = new User(
                userData.id,
                userData.username,
                userData.email,
                userData._token,
                userData._cart,
                userData._wishlist

            )

            if (loadedUser.token) {

                return new AuthActions.AuthenticateSuccess({
                    id: loadedUser.id,
                    name: loadedUser.name,
                    email: loadedUser.email,
                    token: loadedUser.token,
                    cart: loadedUser.cart,
                    wishlist: loadedUser.wishlist,
                    redirect: false
                })
            }

            return { type: 'DUMMY' };

        })
    )

    @Effect({dispatch: false})
    authLogout = this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(()=> {
            localStorage.removeItem('userData');
            this.router.navigate(['/login'])
        })
    )




    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
    ) { }
}