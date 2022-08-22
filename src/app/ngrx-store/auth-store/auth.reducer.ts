import { User } from "src/app/models/user.model";
import * as AuthActions from './auth.actions'


export interface State {
    user: User | null;
    authError: string;
    loading: boolean
}

export const initialState: State = {
    user: null,
    authError: '',
    loading: false
}

export function authReducer(
    state = initialState,
    action: AuthActions.AuthActions
) :State {
    switch (action.type) {
        case AuthActions.AUTHENTICATE_SUCCESS:
            const user = new User(
                action.payload.id,
                action.payload.name,
                action.payload.email,
                action.payload.token,
                action.payload.cart,
                action.payload.wishlist
            )
            return {
                ...state,
                authError: '',
                user: user,
                loading: false
            };

        case AuthActions.LOGOUT:
            return {
                ...state,
                user: null
            }
        case AuthActions.LOGIN_START:
        case AuthActions.SIGNUP_START:
            return {
                ...state,
                authError: '',
                loading: true
            };
        case AuthActions.AUTHENTICATE_FAIL:
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false
            }
        case AuthActions.RELOAD_USER:
            return {
                ...state,
                authError: '',
                loading: true
            }

        default:
            return {
                ...state
            }
    }

    
    
}