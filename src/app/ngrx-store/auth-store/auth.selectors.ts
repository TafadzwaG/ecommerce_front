import { State } from './../auth-store/auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store'

export const getAuthUserState = createFeatureSelector<State>('auth')



export const selectUsername = createSelector(
    getAuthUserState,
    (state: State) => state.user.name 
)

export const isAuthenticated = createSelector(
    getAuthUserState,
    (state: State) => !!state.user.token
)

export const userEmail = createSelector(
    getAuthUserState,
    (state: State) => state.user.email
)

export const selectCartInUser =   createSelector( 
    getAuthUserState, 
    (state : State ) => state.user.cart
)

export const selectWishListInUser =  createSelector(
    getAuthUserState, 
    (state: State) => state.user.wishlist
)




