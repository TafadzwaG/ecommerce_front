import {  createSelector } from '@ngrx/store'
import { AppState } from '../app.reducer'


export const getAuthUserState = (state: AppState) => state.auth



export const selectUsername = createSelector(
    getAuthUserState,
    (state) => state.user.name
)

export const isAuthenticated = createSelector(
    getAuthUserState,
    (state) => !!state.user.token
)

export const userEmail = createSelector(
    getAuthUserState,
    (state) => state.user.email
)

export const selectCartInUser =   createSelector( 
    getAuthUserState, 
    (state) => state.user.cart
)

export const selectWishListInUser =  createSelector(
    getAuthUserState, 
    (state) => state.user.wishlist
)




