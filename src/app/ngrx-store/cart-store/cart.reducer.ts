import * as CartActions from './cart.actions'


export interface State {
    cartError: string,
    loading: boolean
    
}

export const initialCartState: State = {
    cartError: '',
    loading: false
}


export function cartReducer(
    state = initialCartState,
    action: CartActions.CartActions
) {
    switch (action.type) {
        case CartActions.ADD_ITEM_TO_CART_START:
        case CartActions.ADDING_ITEM_SUCCESS:
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