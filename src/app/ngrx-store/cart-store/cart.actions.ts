import { CartItem } from 'src/app/interfaces/item.interface';
import { Product } from './../../models/product.model';
import { Action } from '@ngrx/store'

export const ADD_ITEM_TO_CART_START = '[Cart] Add item to cart Start'
export const REMOVE_ITEM_FROM_CART = '[Cart] Remove item from cart'
export const ADDING_ITEM_FAILED = '[Cart] Failed to add item to cart'
export const ADDING_ITEM_SUCCESS = '[Cart] Addinng item success'
export const REMOVING_ITEM_SUCCESS = '[Cart] Removing item success'
export const REMOVING_ITEM_FAILED = '[Cart] Removing item failed'
export const SET_CART_ITEMS = '[Cart] Set cart items'
export const FETCH_CART_FAILED = '[Cart] Fetch Cart failed'
export const FETCH_CART = '[Cart] Fetch Cart'
export const CLEAR_CART = '[Cart] Clear Cart'
export const REMOVE_ITEM_FROM_CART_ON_SERVER = '[Cart] Remove item from cart'


export class FetchCart implements Action {
    readonly type = FETCH_CART
}

export class FetchCartFailed implements Action {
    readonly type = FETCH_CART_FAILED
    constructor(
        public payload: string
    ){}
}

export class ClearCart implements Action {
    readonly type = CLEAR_CART
}

export class RemoveItemFromCartOnServer implements Action {
    readonly type = REMOVE_ITEM_FROM_CART_ON_SERVER
    constructor(
        public payload: number
    ){}
}


export class  SetCartItems implements Action {
    readonly type = SET_CART_ITEMS

    constructor(
        public payload : CartItem[]
    ){}
}

export class AddItemToCartStart implements Action {
    readonly type = ADD_ITEM_TO_CART_START

    constructor(
        public payload: {
            product_id: number
            quantity: number
            cart_id: number
        }
    ){}
}

export class RemoveItemFromCart implements Action {
    readonly type = REMOVE_ITEM_FROM_CART
    constructor(
        public payload: number
    ){}
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
    | SetCartItems
    | AddItemToCartStart
    | AddingItemFailed
    | RemoveItemFailed
    | RemoveItemSuccess
    | RemoveItemFromCart
    | AddItemSuccess
    | FetchCart
    | FetchCartFailed
    | ClearCart
    | RemoveItemFromCartOnServer