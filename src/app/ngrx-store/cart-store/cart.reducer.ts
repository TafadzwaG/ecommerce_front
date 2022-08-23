import { Product } from './../../models/product.model';
import * as CartActions from './cart.actions'


export interface State {
    cartError: string,
    loading: boolean,
    cart: {}
    items: Product[]
    
}

export const initialCartState: State = {
    cartError: '',
    loading: false,
    cart: {},
    items: []
}


export function cartReducer(
    state = initialCartState,
    action: CartActions.CartActions
): State {
    switch (action.type) {
        case CartActions.ADD_ITEM_TO_CART_START:
            return {
                ...state,
                cartError: '',
                loading: true
            }

        case CartActions.ADDING_ITEM_SUCCESS:
            return {
                ...state,
                cartError: '',
                loading: false
                // cart: [...action.payload]
            }
        case CartActions.SET_CART_ITEMS:
            return {
                ...state,
                cartError: '',
                items: [...action.payload]
            }
        
        case CartActions.ADDING_ITEM_FAILED:
        case CartActions.REMOVE_ITEM_FROM_CART:
        case CartActions.ADDING_ITEM_SUCCESS:
        case CartActions.REMOVING_ITEM_FAILED:
        default:
            return {
                ...state
            };
    }
}