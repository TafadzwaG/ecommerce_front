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
      quantity: new FormControl(this.quantity),
    });

    this.quantityForm.valueChanges.subscribe((value) =>
      console.log('Changed Value', value)
    );
  }

  quantityIncrease(product_id: number, cart_id: number, index: number, pro_id: number) {
    this.quantity++;
    this.quantityForm.setValue(
      {
        quantity: this.quantity,
      },
      {
        onlySelf: true,
      }
    );

    
    
    this.onUpdateProduct(product_id, this.quantity, cart_id, pro_id);
  }

  onUpdateProduct(product_id: number, quantity: number, cart_id: number, item_id:number) {
    this.store.dispatch(
      new CartActions.AddItemToCartStart({
        product_id: item_id - 1,
        quantity,
        cart_id,
      })
    )
    this.store.dispatch(
      new CartActions.UpdateItemQuantity({
        product_id,
        quantity,
        cart_id,
      })
    );
  }

  quantityDecrease() {
    if (this.quantity < 2) {
      return;
    }
    this.quantity--;
    // this.quantityForm.setValue({
    //   quantity: this.quantity,
    // });
    // this.onUpdateProduct(33, this.quantity, 12);
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
