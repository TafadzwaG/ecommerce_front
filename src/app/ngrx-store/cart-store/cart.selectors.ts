import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const getCartState = (state: AppState) => state.cart;

export const selectCartCost = createSelector(getCartState, (state) => {
  var totalPrice = 0;
  state.items.forEach(
    (item) => (totalPrice += item.quantity * item.product.price)
  );

  return totalPrice;
});

export const itemsL = createSelector(
  getCartState,
  (state) => state.items.length
);
