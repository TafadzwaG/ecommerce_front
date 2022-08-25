import { baseURL } from 'src/environments/environment';
import { CartInterface } from './../../interfaces/cart-interface';
import { AddToCartResponse } from './../../interfaces/add-to-cart-response';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
            new CartActions.AddItemSuccess('Add to Cart sucessful'),
          ]),
          catchError((errorRes) => {
            return throwError(errorRes);
          })
        );
    })
  );

  // @Effect()
  // removeItemfromCart$ = this.actions$.pipe(
  //   ofType(CartActions.REMOVE_ITEM_FROM_CART_ON_SERVER),
  //   switchMap((removeItemOnServer: CartActions.RemoveItemFromCartOnServer) => {
  //     return this.http
  //     .post<any>(
  //       baseURL + 'remove_cart_item/' + removeItemOnServer.payload,{}
  //     ).pipe(
  //       tap((resData)=> {
  //         console.log(resData)
  //       })
  //     )
  //   })
  // )

  @Effect()
  fetchCart = this.actions$.pipe(
    ofType(CartActions.FETCH_CART),
    switchMap((fetchCartAction: CartActions.FetchCart) => {
      return this.http.get<any>(baseURL + 'cart').pipe(
        map((resData) => {
          console.log(resData.data.items);
          localStorage.setItem('cartItems', JSON.stringify(resData.data.items));
          return new CartActions.SetCartItems(resData.data.items);
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
