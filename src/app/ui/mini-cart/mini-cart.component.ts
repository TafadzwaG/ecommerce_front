import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from '../../ngrx-store/cart-store/cart.actions'
import * as fromApp from '../../ngrx-store/app.reducer'
@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {

  public hover : boolean = false
  private storeSubscription: Subscription
  public cart_items : number | 0

  constructor(
    private store : Store<fromApp.AppState>
  ) { 
    this.storeSubscription = Subscription.EMPTY
  }

  

  ngOnInit(): void {
    this.storeSubscription = this.store.select('cart').subscribe(
      cartState => {
        this.cart_items = cartState.items.length
        console.log(this.cart_items)
      }
    )


  }

}
