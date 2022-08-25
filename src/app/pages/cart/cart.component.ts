import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../ngrx-store/app.reducer';
import * as CartActions from '../../ngrx-store/cart-store/cart.actions';
import {
  itemsSelector,
  selectCountOfItems,
} from 'src/app/ngrx-store/cart-store/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public itemsCount$: number;
  public isEmpyt: boolean;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new CartActions.FetchCart());

    this.store.pipe(select(selectCountOfItems)).subscribe((itemsCount) => {
      this.itemsCount$ = itemsCount;
      console.log(itemsCount)
    });

    this.itemsCount$ === 0 ? (this.isEmpyt = true) : (this.isEmpyt = false);
    
    console.log(this.isEmpyt)
  
  }
}
