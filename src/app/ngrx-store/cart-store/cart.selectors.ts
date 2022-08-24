import { createSelector } from '@ngrx/store'
import { AppState } from '../app.reducer'


export const getCartState = (state: AppState ) => state.cart

// export const selectCartCost = createSelector(
//     getCartState,
//     (state) => state.items.forEach(
//         item => {
//             let totalCost = totalCost + (item.quantity * item.product.price)
//         }
//     )

//     return totalCost
// )






