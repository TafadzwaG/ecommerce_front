import { CartItem } from 'src/app/interfaces/item.interface';
import { CartInterface } from './../../interfaces/cart-interface';
import { Product } from './../../models/product.model';
import * as CartActions from './cart.actions'


export interface State {
    cartError: string,
    loading: boolean,
    cart: CartInterface | {}
    items: CartItem []
    
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
             
            }
        case CartActions.SET_CART_ITEMS:
            return {
                ...state,
                cartError: '',
                items: [...action.payload]
            }
        case CartActions.FETCH_CART_FAILED:
            return {
                ...state,
                cartError: action.payload,
                loading: false 
                
            }
        
        case CartActions.ADDING_ITEM_FAILED:
            return {
                ...state,
                cartError: action.payload,
                loading: false
            }
        case CartActions.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartError: '',
                items: state.items.filter( item => item.id !== action.payload)
            }
        case CartActions.CLEAR_CART:
            return {
                ...state,
                cartError: '',
                items: []
            }
        case CartActions.ADDING_ITEM_SUCCESS:
        case CartActions.REMOVING_ITEM_FAILED:
        default:
            return {
                ...state
            };
    }
}