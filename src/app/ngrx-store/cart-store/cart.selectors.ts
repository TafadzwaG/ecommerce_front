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

export const itemsSelector = createSelector(getCartState, (state) => {
  return state.items;
});

export const selectCountOfItems = createSelector(getCartState, (state) => {
  return state.items.length;
});

export const selectIsLoading = createSelector(getCartState, (state) => {
  return state.loading;
});

export const errorSelector = createSelector(getCartState, (state) => {
  return state.cartError;
});
