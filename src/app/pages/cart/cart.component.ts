import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducer'
import * as CartActions from '../../ngrx-store/cart-store/cart.actions' 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private store: Store<fromApp.AppState> 
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new CartActions.FetchCart())
  }

}
