import { User } from "src/app/models/user.model";
import * as AuthActions from './auth.actions'


export interface State {
    user: User | null;
    authError: string;
    loading: boolean
}

const initialState: State = {
    user: null,
    authError: '',
    loading: false
}

export function authReducer(
    state = initialState,
    action: AuthActions.AuthActions
){
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
                authError: null,
                user: user,
                loading: false
            };
    
        default:
            break;
    }
}