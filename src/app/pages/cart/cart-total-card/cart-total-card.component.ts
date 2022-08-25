import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../ngrx-store/app.reducer';
import {
  selectCartCost,
} from 'src/app/ngrx-store/cart-store/cart.selectors';

@Component({
  selector: 'app-cart-total-card',
  templateUrl: './cart-total-card.component.html',
  styleUrls: ['./cart-total-card.component.scss'],
})
export class CartTotalCardComponent implements OnInit {
  public totalPrice$: number;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectCartCost)).subscribe( total => {
      this.totalPrice$ = total
    })
  }
}
