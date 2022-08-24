import { CartInterface } from './../../interfaces/cart-interface';
import { AddToCartResponse } from './../../interfaces/add-to-cart-response';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../../environments/environment';
import * as CartActions from './cart.actions';

@Injectable()
export class CartEffects {
  @Effect()
  cartAddToCart = this.actions$.pipe(
    ofType(CartActions.ADD_ITEM_TO_CART_START),
    switchMap((addToCartAction: CartActions.AddItemToCartStart) => {
      return this.http
        .post<AddToCartResponse>(
          baseURL + 'carts/' + addToCartAction.payload.cart_id,
          {
            product_id: addToCartAction.payload.product_id,
            quantity: addToCartAction.payload.quantity,
          }
        )
        .pipe(
          tap((resData) => {
            console.log(resData.data);
          }),
          switchMap((resData) => [
            new CartActions.SetCartItems(resData.data.items),
            new CartActions.AddItemSuccess('Add to Cart sucessful'),
          ]),
          catchError((errorRes) => {
            return throwError(errorRes);
          })
        );
    })
  );

  @Effect()
  fetchCart = this.actions$.pipe(
    ofType(CartActions.FETCH_CART),
    switchMap((fetchCartAction: CartActions.FetchCart) => {
      return this.http.get<any>(baseURL + 'cart').pipe(
        map((resData) => {
          localStorage.setItem('cartItems', JSON.stringify(resData.data.items));
          return new CartActions.SetCartItems(resData.data.items);
        }),   
      );
    })
  );
  
 
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
