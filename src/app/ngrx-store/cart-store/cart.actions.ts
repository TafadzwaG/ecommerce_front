import { Product } from './../../models/product.model';
import { Action } from '@ngrx/store'

export const ADD_ITEM_TO_CART_START = '[Cart] Add item to cart Start'
export const REMOVE_ITEM_FROM_CART = '[Cart] Remove item from cart'
export const ADDING_ITEM_FAILED = '[Cart] Failed to add item to cart'
export const ADDING_ITEM_SUCCESS = '[Cart] Addinng item success'
export const REMOVING_ITEM_SUCCESS = '[Cart] Removing item success'
export const REMOVING_ITEM_FAILED = '[Cart] Removing item failed'



export class AddItemToCartStart implements Action {
    readonly type = ADD_ITEM_TO_CART_START

    constructor(
        public payload: {
            product_id: number
            quantity: number
        }
    ){}
}

export class RemoveItemFromCart implements Action {
    readonly type = REMOVE_ITEM_FROM_CART
}

export class AddingItemFailed implements Action {
    readonly type = ADDING_ITEM_FAILED

    constructor(
        public payload: string
    ){}
}

export class AddItemSuccess implements Action {
    readonly type = ADDING_ITEM_SUCCESS
    constructor(
        public payload: string
    ){}
}

export class RemoveItemSuccess implements Action {
    readonly type = REMOVING_ITEM_SUCCESS
    constructor(
        public payload : string
    ){}
}

export class RemoveItemFailed implements Action {
    readonly type = REMOVING_ITEM_FAILED

    constructor(
        public payload: string
    ){}
}

export type CartActions =
    | AddItemToCartStart
    | AddingItemFailed
    | RemoveItemFailed
    | RemoveItemSuccess
    | RemoveItemFromCart
    | AddItemSuccess