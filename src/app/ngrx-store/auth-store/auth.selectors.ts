import { State } from './../auth-store/auth.reducer';
import { createSelector } from '@ngrx/store'

export const selectUsername = (state: State) => state.user.name 

export const isAuthenticated = (state: State) => !!state.user.token

export const userEmail = (state: State) => state.user.email

export const selectCartInUser = (state : State ) => state.user.cart

export const selectWishListInUser = (state: State) => state.user.wishlist


