import { Action } from '@ngrx/store'


export const LOGIN_START = '[Auth]  Login Start'
export const AUTHENTICATE_SUCCESS = '[Auth] Authentication Success'
export const AUTHENTICATE_FAIL = '[Auth] Login Failed'
export const SIGNUP_START = '[Auth] Signup Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout';


export class AuthenticateSuccess implements Action {
    readonly type =  AUTHENTICATE_SUCCESS

    constructor(
        public payload: {
            id: number;
            name: string;
            email: string;
            token: string;
            cart: {
                id: number
                items : []
            };
            wishlist: {
                id: number
                items : []
            }
            redirect: boolean
            
        }
    ){}
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;
  
    constructor(public payload: { email: string; password: string }) {}
  }
  
  export class AuthenticateFail implements Action {
    readonly type = AUTHENTICATE_FAIL;
  
    constructor(public payload: string) {}
  }
  
  export class SignupStart implements Action {
    readonly type = SIGNUP_START;
  
    constructor(
        public payload: {
            name: string,
            email: string, 
            password: string,
            password_confirmation: string
         }
         ){}
  }

  export class Logout implements Action {
    readonly type = LOGOUT;
  }
  
  export class ClearError implements Action {
    readonly type = CLEAR_ERROR;
  }
  
  export class AutoLogin implements Action {
    readonly type = AUTO_LOGIN;
  }
  
  export type AuthActions =
    | AuthenticateSuccess
    | Logout
    | LoginStart
    | AuthenticateFail
    | SignupStart
    | ClearError
    | AutoLogin;

