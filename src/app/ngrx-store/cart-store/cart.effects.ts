import { AddToCartResponse } from './../../interfaces/add-to-cart-response';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../../environments/environment';
import * as CartActions from './cart.actions'






@Injectable()
export class CartEffects {
    @Effect()
    cartAddToCart = this.actions$.pipe(
        ofType(CartActions.ADD_ITEM_TO_CART_START),
        switchMap((addToCartAction: CartActions.AddItemToCartStart) => {
            return this.http
                .post<AddToCartResponse>(
                    baseURL + 'carts/' + 12, {
                        product_id: addToCartAction.payload.product_id,
                        quantity: addToCartAction.payload.quantity
                    }
                ).pipe(
                    tap(resData => {
                        console.log(resData)
                    }),
                    map(resData => {
                       return new CartActions.AddItemSuccess('Add to Cart sucessful')
                    }), catchError(errorRes => {
                        return throwError(errorRes)
                    })
                )
        })
    )










    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
    ) { }
    
}
