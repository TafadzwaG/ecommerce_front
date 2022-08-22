import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import * as CartActions from '../../ngrx-store/cart-store/cart.actions'
import * as fromApp from '../../ngrx-store/app.reducer'
import * as AuthActions from '../../ngrx-store/auth-store/auth.actions'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any
  private storeSubscription: Subscription
  public isLoading: boolean = false
  imageUrl = 'http://127.0.0.1:8000/storage/'

  constructor(
    private store: Store<fromApp.AppState>
  ) {
    this.storeSubscription = Subscription.EMPTY
  }

  ngOnInit(): void {
    this.storeSubscription = this.store.select('cart').subscribe(
      cartState => {
        this.isLoading = cartState.loading
      }
    )
  }

  onAddToCart(product_id: number, quantity: number): void {

    this.store.dispatch(new CartActions.AddItemToCartStart({
      product_id,
      quantity
    }))


    // this.store.dispatch(new AuthActions.ReloadUser())
  }

  onReloadUser(): void {
    this.store.dispatch( new AuthActions.ReloadUser())
  }

}
