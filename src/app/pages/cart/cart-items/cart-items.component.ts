import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import * as fromApp from '../../../ngrx-store/app.reducer';
import * as CartActions from '../../../ngrx-store/cart-store/cart.actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  public cart_items: any = [];
  private authSubscription: Subscription;
  public quantity: number = 1;
  public quantityForm: FormGroup;

  imageUrl = 'http://127.0.0.1:8000/storage';

  constructor(private store: Store<fromApp.AppState>) {
    this.authSubscription = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.authSubscription = this.store
      .select('cart')
      .pipe(map((cartState) => cartState.items))
      .subscribe((items) => {
        this.cart_items = items;
      });

    this.quantityForm = new FormGroup({
      'quantity': new FormControl(this.quantity),
    });
  }

  quantityIncrease() {
    this.quantity++;
    console.log(this.quantity)
    this.quantityForm.get('quantity')

  }

  quantityDecrease() {
    if (this.quantity < 2) {
      return;
    }
    this.quantity--;
    console.log(this.quantity)
  }

  calculateSubTotal(quantity: number, price: number) {
    let subTotal = 0;
    subTotal = subTotal + quantity * price;
    return subTotal.toFixed(2);
  }

  removeItemFromCart(id: number) {
    this.store.dispatch(new CartActions.RemoveItemFromCart(id));
    this.store.dispatch(new CartActions.RemoveItemFromCartOnServer(id));
  }

  computeImageString(imageString: string) {
    const image = imageString.replace(/^public/, '');

    return image;
  }
}
